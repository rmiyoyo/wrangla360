import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

export async function createAssessment({
  projectID,
  recaptchaKey,
  token,
  recaptchaAction,
}: {
  projectID: string;
  recaptchaKey: string;
  token: string;
  recaptchaAction: string;
}): Promise<number | null> {
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  const request = {
    parent: projectPath,
    assessment: {
      event: {
        token,
        siteKey: recaptchaKey,
      },
    },
  };

  try {
    const [response] = await client.createAssessment(request);

    // Check token validity
    if (!response.tokenProperties?.valid) {
      console.log(`Invalid token: ${response.tokenProperties?.invalidReason}`);
      return null;
    }

    // Check action match
    if (response.tokenProperties?.action !== recaptchaAction) {
      console.log('Token action does not match expected action');
      return null;
    }

    // Log score and reasons for debugging
    console.log(`reCAPTCHA Enterprise score: ${response.riskAnalysis?.score}`);
    (response.riskAnalysis?.reasons || []).forEach((reason: number) => {
      console.log(`Risk reason: ${reason}`);
    });

    return response.riskAnalysis?.score ?? 0;
  } catch (error) {
    console.error('reCAPTCHA assessment error:', error);
    return null;
  }
}