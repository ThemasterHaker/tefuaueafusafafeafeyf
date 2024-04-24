from flask import Flask, request, jsonify
import os

app = Flask(__name__)

CHATROOMS_DIR = "chatrooms"

# Ensure chatrooms directory exists
if not os.path.exists(CHATROOMS_DIR):
    os.makedirs(CHATROOMS_DIR)

@app.route('/create_chatroom', methods=['POST'])
def create_chatroom():
    chatroom_name = request.form['chatroom_name']
    chatroom_path = os.path.join(CHATROOMS_DIR, chatroom_name + '.txt')

    # Create a new text file for the chatroom
    with open(chatroom_path, 'w') as f:
        pass

    return jsonify({'success': True})

@app.route('/send_message', methods=['POST'])
def send_message():
    chatroom_name = request.form['chatroom_name']
    message = request.form['message']
    chatroom_path = os.path.join(CHATROOMS_DIR, chatroom_name + '.txt')

    # Append the message to the chatroom file
    with open(chatroom_path, 'a') as f:
        f.write(message + '\n')

    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
