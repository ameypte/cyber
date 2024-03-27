
import cv2
from flask import jsonify
# pip install opencv-python
def generate_certificate(name):
    print(name)
    name2 = name
    updated_name = name2.split()
    if not updated_name:    
        return jsonify({"error": "No names provided. Cannot generate certificate."})

    length_sum = sum(len(name) for name in updated_name)  # Calculate total name length
    print(length_sum)

    if length_sum>18:
        x_coordinate = 700
    if length_sum >= 15 and length_sum <=18:
        x_coordinate = 740
    elif length_sum >= 13 and length_sum<15:
        x_coordinate = 750
    elif length_sum>=11 and length_sum<=12:
        x_coordinate = 770
    elif length_sum >=7 and length_sum<=10:
        x_coordinate = 800
    else:
        x_coordinate = 900
    template = cv2.imread("./data/certificate_template.png")
    # x_coordinate = 628
    cv2.putText(template,name2,(x_coordinate,800),cv2.FONT_ITALIC,1.8,(0,0,0),2,cv2.LINE_AA)
    # cv2.putText(template, name2, (628, 800), cv2.FONT_HERSHEY_SIMPLEX + cv2.FONT_WEIGHT_BOLD, 1.5, (0, 0, 255), 1, cv2.LINE_AA)

    cv2.imwrite(f"./data/{name2}.png",template)
    print("Certificate GEnerated")
    return jsonify({"success":"Certificate GEnerated"})