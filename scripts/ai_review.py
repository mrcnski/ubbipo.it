import os

import anthropic

diff = os.getenv("DIFF", "")

if not diff.strip():
    review = "No diff found."
else:
    client = anthropic.Anthropic()  # uses env vars

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=16000,
        system="You're a careful assistant reviewing commit diffs for mistakes or bad practices.",
        messages=[
            {"role": "user", "content": f"Please review the following git diff and identify any problems or mistakes. Use alert emoticons ONLY when calling out serious issues. Format your response using Markdown and write it first in Italian, then English:\n\n{diff}"}
        ],
    )

    review = "".join(block.text for block in response.content if block.type == "text")

# Write review to a file
with open("ai_review.txt", "w") as f:
    f.write(review)
