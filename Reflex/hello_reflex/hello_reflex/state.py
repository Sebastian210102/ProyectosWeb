import reflex as rx
import openai
from hello_reflex import openia_env
openai.api_key =  openia_env.API_KEY

class State(rx.State):

    # The current question being asked.
    question: str

    # Keep track of the chat history as a list of (question, answer) tuples.
    chat_history: list[tuple[str, str]] = []

    async def answer(self):
        client = openai.api_key
        # # Our chatbot is not very smart right now...
        # answer = "I don't know!"
        # self.chat_history.append((self.question, answer))
        # Our chatbot is not very smart right now...
              # Start streaming completion from OpenAI
        session = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": self.question}
            ],
            temperature=0.7,
            stream=True,
        )

        answer = "I don't know!"
        self.chat_history.append((self.question, ""))

       # Initialize response and update UI
        answer = ""
        self.chat_history.append((self.question, answer))
        self.question = ""
        yield

        # Process streaming response
        async for item in session:
            if hasattr(item.choices[0].delta, "content"):
                if item.choices[0].delta.content is None:
                    break
                answer += item.choices[0].delta.content
                self.chat_history[-1] = (
                    self.chat_history[-1][0],
                    answer,
                )
                yield