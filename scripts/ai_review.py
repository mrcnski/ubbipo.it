import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
diff = os.getenv("DIFF", "")

if not diff.strip():
    review = "No diff found."
else:
    client = openai.OpenAI()  # uses env vars

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You're a careful assistant reviewing commit diffs for mistakes or bad practices."},
            {"role": "user", "content": f"Please review the following git diff and identify any problems or mistakes. Use alert emoticons ONLY when calling out serious issues. Format your response using Markdown and write it first in Italian, then English:\n\n{diff}"}
        ],
        temperature=0.3
    )

    review = response.choices[0].message.content

# Write review to a file
with open("ai_review.txt", "w") as f:
    f.write(review)
