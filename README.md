# Image Capture and Measurement Script

## Overview

This Python script utilizes computer vision techniques to capture an image from a camera, preprocess it, and measure the dimensions of objects in the image. The script employs the OpenCV library for image processing and measurements.

## Features

1. *Image Capture:*
   - The script captures images from the camera, allowing the use of either the primary or a secondary camera.

2. *Camera Configuration:*
   - Camera parameters such as brightness, width, and height are configured to enhance image capture conditions.

3. *Image Preprocessing:*
   - Grayscale conversion, Gaussian blurring, and Canny edge detection are applied to preprocess the captured image.

4. *Object Segmentation:*
   - Contours are identified in the processed image, enabling the segmentation of objects.

5. *Dimension Measurement:*
   - The script measures the dimensions of objects in the image, including width and height.

6. *Visualization:*
   - The original image, as well as the image with measurements, are displayed using OpenCV.

7. *Dynamic Reference Object:*
   - The script dynamically selects a reference object for dimension measurement based on contours.

8. *User Interaction:*
   - Users can close the displayed images by pressing any key.

9. *Dependencies:*
   - The script relies on various Python libraries, including OpenCV (`cv2`), `numpy`, `imutils`, and `scipy`.

10. *Customization:*
    - Users can adjust camera parameters and other settings based on their specific requirements.

11. *Documentation:*
    - A README provides clear instructions on how to install dependencies, run the script, and customize parameters.

## Usage

1. Install dependencies using:

```bash
    pip install -r requirements.txt
```

2. Run the script:

```bash
    python script_name.py
``` 

3. Follow on-screen instructions to close the displayed images.

## License

This script is licensed under the [MIT License](LICENSE).
