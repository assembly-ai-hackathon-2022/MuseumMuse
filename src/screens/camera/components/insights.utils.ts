import {Configuration, OpenAIApi} from 'openai';
import {OPENAI_API_KEY} from '@env';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getInsights = async (text: string): Promise<string> => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `
      This is text from a museum label: ${text}

      This is more info about the artist:

      This is more info about the artwork:

      This is an additional fun fact related to the art:

      Separate each paragraph with a newline character, and remove the paragraphs that you're not strongly confident in their validity. Also, make sure to remove the prompt text, and write your own text below.
    `,
    temperature: 0.1,
    max_tokens: 1500,
  });

  if (response.data.choices.length === 0 || !response.data.choices[0].text) {
    throw new Error('No choices returned from OpenAI');
  }

  return response.data.choices[0].text.trim();
};
