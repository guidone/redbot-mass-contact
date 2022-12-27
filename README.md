# RedBot Mass Contact

This plugin can be used to send a message to all users of the chatbot, the plugin handles correctly users using different platforms (*Telegram*, *Messenger*, *Slack*, etc.).

Import the **Mass Contact** sub-flow in **Node-RED**, then connect the output to all node senders supported by your chatbot.

![Example Mass Contact](https://dashboard.red-bot.io/assets/10b8d299-5237-47a1-bdd7-e318331ede34)

Open **Mission Control**  and type the message

![Edit message](https://dashboard.red-bot.io/assets/3fdfe959-52ce-418a-982f-03d205b6eccc)

If the chatbot is using multiple platforms (i.e., *Telegram* and *Messenger*) then **Mass Contact** will send the message using the right platform, just connect all the sender nodes to the **Mass Contact** sub-flow output. If a user is accessing the chatbot with more than one platform, the default one will be chosen (defined in the sub-flow configuration).

All contacts will be queued using the **MC Queue** node and sent to the platform at a regular speed, check the status of the queue clicking on the link *"recipients queue"* in **Mission Control**.

**Changelog**
- _1.2.1_ Added MC Queue support
- _1.0.0_ Initial version

> This is a [RedBot](https://red-bot.io/) plugin, an additional functionality for chatbots created with **RedBot**, [click here](https://red-bot.io/) to get started then go to the _Plugins_ sections to install this extension
