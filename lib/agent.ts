import OpenAI from 'openai';

const openai = new OpenAI();

async function main() {
  const prompt = `
  Given the following energy consumption for our University library and the School of Information Science:
  Average monthly power consumption (Last 3 months) = 20,146.67 [kWh]

  Average High Rate consumption (Last 3 months) = 15,870.33 [kWH]

  Average Low Rate consumption (Last 3 months) = 4,276.33 [kWH]

  Daily consumption average = 223.85 [kW]

  Per Capita Consumption = 6.76 [kwH]

  Average Monthly billing (Last 3 months) = 783,348.81 [Ksh]

  Average High Rate Consumption (Last 3 months) = 15,870.33 [kWH]

  Generate energy saving recommendations formatted as a JavaScript array, with each recommendation being an object with a title, and content property
  `;
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices;
}

export default main;
