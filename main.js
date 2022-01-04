var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var Image = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.kindpng.com/picc/m/37-376926_free-black-girl-clipart-transparent-background-cartoon-girl.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWNt9mAyyhSSjuFvPgqC35txwRAH_n641_Q&usqp=CAU" , "https://image.shutterstock.com/image-vector/happy-young-father-holding-his-260nw-731506243.jpg" , "https://i.pinimg.com/originals/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var Name = ["Family Book" ,"akshaya", "Sister" ,"Dad", "Mom"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
