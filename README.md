Autobill : Automatic Checkout System

Overview :
AutoBill is an AI-powered autonomous checkout system for retail stores, that combines the power of computer vision and machine learning to provide an amazing shopping experience.AutoBill provides a faster checkout
shopping experience to minimize human interactions in the store to keep shoppers and employees safer during the pandemic.The Automatic Checkout System, which leverages the YOLO (You Only Look Once) algorithm for
object detection, Raspberry Pi for processing power, a camera module for visual input, a Load cell and HX711 load cell amplifier for weighing products, and Edge Impulse for labeling. This fusion of hardware and 
software creates a seamless and efficient checkout process that not only enhances the customer experience but also revolutionizes traditional retail practices.
![image](https://github.com/user-attachments/assets/913fda6b-c8b3-445a-950b-63c85360a50d)


Things used in this project :
 * Rasberry Pi 3  model
 * Load Cell
 * Sparkfun Load Cell Amplifier
 * 5VA 2A power supply
 * 160 degree wide Angle
 * RGB/White light strip
 * DC power jack 2.1MM barrel- type PCB mount

Software apps and online services:
 * Edge impluse studio
 * Rasberry Pi Raspbian

Features:
 * AI-powered
 * Instant checkout
 * contact-free checkout
 * Easy deployment

![image](https://github.com/user-attachments/assets/5dbc6fc5-eb25-4365-bd2e-fb8e196c179f)

Steps to Complete:
1. Object detection
   Edge Impulse is one of the leading development platforms for machine learning on edge devices, free for developers and trusted by enterprises. Here we are 
   using machine learning to build a system that can recognize the products available in the shops. Then we deploy the system on the Raspberry Pi 3B.

2. Data acquisition
   To make the machine learning model it's important to have a lot of images of the products. When training the model, these product images are used to let the 
   model distinguish between them. Make sure you have a wide variety of angles and zoom levels of the products which are available in the shops. For the data 
   acquisition, you can capture data from any device or development board, or upload your existing datasets. So here we are uploading our existing datasets.
   ![image](https://github.com/user-attachments/assets/1005f5d3-31f8-4c48-9989-3bd65850c763)

3.Labelling Data
  The labeling queue shows you all the unlabeled data in your dataset. Labeling objects is as easy as dragging a box around the object, and entering a label. To 
  make the life a bit easier we try to automate this process by running an object tracking algorithm in the background. If you have the same object in multiple 
  photos we thus can move the boxes for you and you just need to confirm the new box. After dragging the boxes, click Save labels and repeat this until your whole 
  dataset is labeled.
  ![image](https://github.com/user-attachments/assets/0b8999b7-396f-4680-aa7d-674c9ce07bcc)

4. Designing an Impulse
   ![image](https://github.com/user-attachments/assets/9ca2fe77-3c62-49d5-a002-5c5dbd10a338)
   With the training set in place, you can design an impulse. An impulse takes the raw data, adjusts the image size, uses a preprocessing block to manipulate the 
   image, and then uses a learning block to classify new data. Preprocessing blocks always return the same values for the same input (e.g. convert a color image 
   into a grayscale one), while learning blocks learn from past experiences.

For this system, we'll use the 'Images' preprocessing block. This block takes in the color image, optionally makes the image grayscale, and then turns the data into a features array. Then we'll use a 'Transfer Learning' learning block, which takes all the images in and learns to distinguish between the two ('coffee', 'lamp') classes.

In the studio go to Create impulse, set the image width and image height to 96, the 'resize mode' to Fit shortest axis, and add the 'Images' and 'Object Detection (Images)' blocks. Then click Save impulse.

Then in the image tab, you can see the raw and processed features of every image. You can use the options to switch between 'RGB' and 'Grayscale' mode, but for now, leave the color depth on 'RGB' and click Save parameters.

This will send you to the Feature generation screen. In here you'll:

Resize all the data.
Apply the processing block on all this data.
Create a 3D visualization of your complete dataset.
Click Generate features to start the process.

Afterward the 'Feature explorer' will load. This is a plot of all the data in your dataset. Because images have a lot of dimensions (here: 96x96x3=27648 features) we run a process called 'dimensionality reduction' on the dataset before visualizing this. Here the 27648 features are compressed down to just 3, and then clustered based on similarity. Even though we have little data you can already see the clusters forming and can click on the dots to see which image belongs to which dot.

It's very hard to build a good working computer vision model from scratch, as you need a wide variety of input data to make the model generalize well, and training such models can take days on a GPU. To make this easier and faster we are using transfer learning. This lets you piggyback on a well-trained model, only retraining the upper layers of a neural network, leading to much more reliable models that train in a fraction of the time and work with substantially smaller datasets.

To configure the transfer learning model, click Object detection in the menu on the left. Here you can select the base model (the one selected by default will work, but you can change this based on your size requirements), and set the rate at which the network learns.

Leave all settings as-it is, and click Start training. After the model is done you'll see accuracy numbers below the training output. We have now trained our model.

![image](https://github.com/user-attachments/assets/dafbf77a-8fc2-43c5-bf1f-cff7990b2e85)

With the model trained let's try it out on some test data. When collecting the data we split the data up between training and a testing dataset. The model was trained only on the training data, and thus we can use the data in the testing dataset to validate how well the model will work in the real world. This will help us ensure the model has not learned to overfit the training data, which is a common occurrence.

To validate your model, go to Model testing and select Classify all. Here we hit 93.75% precision, which is great for a model with so little data.

To see classification in detail, click the three dots next to an item, and select Show classification. This brings you to the Live classification screen with much more details on the file (you can also capture new data directly from your development board from here). This screen can help you determine why items were misclassified.

With the impulse designed, trained, and verified you can deploy this model back to your device. This makes the model run without an internet connection, minimizes latency, and runs with minimum power consumption. Edge Impulse can package up the complete impulse - including the preprocessing steps, neural network weights, and classification code - in a single C++ library or model file that you can include in your embedded software.

Checkout Interface:

The checkout interface has two parts,

1. Front-end developed using HTML, JS

   The front-end continuously checks for the changes happening in the back-end API and displays the changes to the user. Once an item is added to the API, the 
   front-end displays as an item added to the cart.
   ![image](https://github.com/user-attachments/assets/069c5905-4170-4310-bb72-3b9d4c47d512)

2. Backend API developed using NodeJS and Express

The backend REST API is developed using NodeJS and Express. ExpressJS is one of the most popular HTTP server libraries for Node.js, which ships with very basic functionalities. The backend API keeps the details of the products that are visually identified.

For setting our interface we have used a small tablet which is having a touch interface with a small stand.

Deploy API on Heroku:

In order to deploy API on Heroku, you must have Git and the Heroku CLI installed to deploy with Git.

Git installation instructions
Heroku CLI installation instructions
Once the prerequisites and installed, now you can deploy your app to Heroku.

Download the code from the Github Repository.
Navigate to the ~/CheckoutUI/server directory

Integrating API in the Code:
In Python Code

Replace the "url" in billing.py with your API URL

In JS Code

Navigate to ~/CheckoutUI/client/asset/scripts
Replace all occurrences of "https://automaticbilling.herokuapp.com/" with your API URL


AT LAST THE USE CASE:

Real-world Application and Impact
Imagine a busy grocery store during peak hours, where long queues at the checkout counters are a common sight. The Automatic Checkout System can transform this scenario by expediting the payment process, reducing customer wait times, and enhancing overall satisfaction. Customers can simply place their items on the counter, watch as the system swiftly identifies, weighs, and labels each product, and then generate a QR code for seamless payment. This not only saves time for shoppers but also improves operational efficiency for retailers.















 
