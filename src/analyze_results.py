import openai
import os

# Aseta API avain ympäristömuuttujista
openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_results(test_results):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Analyze the following test results and provide suggestions for improvements: {test_results}",
import openai
import os

# Aseta API avain ympäristömuuttujista
openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_results(test_results):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Analyze the following test results and provide suggestions for improvements: {test_results}",
        max_tokens=500
    )
    return response.choices[0].text.strip()

if __name__ == "__main__":
    # Lue testitulokset tiedostosta tai syötä ne tähän suoraan (esim. 'test_results.txt')
    with open('test_results.txt', 'r') as file:
        test_results = file.read()
    
    analysis = analyze_results(test_results)
    print("AI Analysis and Suggestions:\n", analysis)


