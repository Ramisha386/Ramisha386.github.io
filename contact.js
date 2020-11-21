const fname=document.getElementById("name");
const email=document.getElementById("email");
const submitbtn=document.getElementById("submit");
const phone=document.getElementById("phonenumber");
const comment=document.getElementById("comments");
const database=firebase.database();

submitbtn.addEventListener('click',(e)=>
{
  e.preventDefault();
  alert("Thank u for your time "+fname.value);
  database.ref('/users/'+ phone.value).set(
    {
      full_name:fname.value,
      email:email.value,
      comment:comment.value.replace(/\n/g,"<br>"),
      when:firebase.database.ServerValue.TIMESTAMP,
      frompage:location.pathname
    });
    // fname.value="",
    // email.value="",
    // comment.value="",
    // phone.value="",
});
function showPastComments()
{
  var showAt=document.getElementById('contactform');
  var commentRef=firebase.database().ref('users/').orderByChild('frompage').equalTo(location.pathname);
  commentRef.once('value',function(snapshot){
    snapshot.forEach(function(itemSnapshot)
  {
    var itemData=itemSnapshot.val();
    var comment=itemData.comment;
    var name=itemData.full_name;
    var date=new Date(itemData.when).toLocaleDateString("en-us");
    showAt.innerHTML +="<li>" + comment + "<span> -- "+name+" ( "+date+" )</span></li>";
  })
  })
}
showPastComments();
