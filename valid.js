function val()
{
    let a= document.forms["regd"]["first_name"].value
    if(a == "" || /^[A-Z a-z]+$/.test(a)!=true)
    {
        alert("Please enter a valid name !")
        return false
    }

    let b = document.forms["regd"]["last_name"].value;
    if(b == "" || /^[A-Z a-z]+$/.test(b)!=true)
    {
        alert("Please enter a valid name !")
        return false
    }
   

    let c= document.forms["regd"]["num"].value;
    if (c.length != 10 || /^[0-9]+$/.test(c)!=true)
    {
        alert("Please enter valid mobile number !")
        return false
    }
    let d = document.forms["regd"]["email"].value;
    if (d == "" || /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(d)!=true)
    {
    alert("Please enter a valid email address")
    return false
    }
    let e = document.forms["regd"]["dob"].value;
    var today = new Date();
    var birthDate = new Date(e);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
            age--;
    }
    if (e == "" || age<=20 || age>=32)
    {
            alert("Age should be in the range of 20-32 years")
            return (false)
    }

    let f = document.forms["regd"]["at"].value;
   if(f == "" || /^[A-Z a-z]+$/.test(f)!=true)
   {
     alert("Please enter a valid present address (At)");
     return false;
   }

   let f2 = document.forms["regd"]["post"].value;
   if(f2 == "" || /^[A-Z a-z]+$/.test(f2)!=true)
   {
     alert("Please enter a valid present address (Post)");
     return false;
   }

   let g = document.forms["regd"]["dist"].value;
   if(g == "" || /^[A-Z a-z]+$/.test(g)!=true)
   {
     alert("Please enter a valid present address (District)");
     return false;
   }

   let h = document.forms["regd"]["st"].value;
   if(h == "" || /^[A-Z a-z]+$/.test(h)!=true)
   {
     alert("Please enter a valid present address (State)");
     return false;
   }

   let i = document.forms["regd"]["pin"].value;
   if(/^[0-9]+$/.test(i)!=true || i.length!=6)
   {
     alert("Please enter a valid present address (Pin Code)");
     return false;
   }

   let j = document.forms["regd"]["ph"].value;
   if (j.length != 10 || /^[0-9]+$/.test(j)!=true) 
   {
     alert("Please enter a valid present address (Phone)");
     return false;
   }

   let k = document.forms["regd"]["cat"].value;
   if(k == "" || /^[A-Z a-z]+$/.test(k)!=true)
   {
     alert("Please enter a valid communication address (At)");
     return false;
   }

   let l = document.forms["regd"]["cpost"].value;
   if(l == "" || /^[A-Z a-z]+$/.test(l)!=true)
   {
     alert("Please enter a valid communication address (Post)");
     return false;
   }

   let k1 = document.forms["regd"]["cdist"].value;
   if(k1 == "" || /^[A-Z a-z]+$/.test(k1)!=true)
   {
     alert("Please enter a valid communication address (District)");
     return false;
   }

   let n = document.forms["regd"]["cst"].value;
   if(n == "" || /^[A-Z a-z]+$/.test(n)!=true)
   {
     alert("Please enter a valid communication address (State)");
     return false;
   }

   let o = document.forms["regd"]["cpin"].value;
   if(/^[0-9]+$/.test(o)!=true || o.length!=6)
   {
     alert("Please enter a valid communication address (Pin Code)");
     return false;
   }

   let p = document.forms["regd"]["cph"].value;
   if (p.length != 10 || /^[0-9]+$/.test(p)!=true) 
   {
     alert("Please enter a valid communication address (Phone)");
     return false;
   }

   let q = document.forms["regd"]["board1"].value;
   if(q == "" || /^[A-Z a-z]+$/.test(q)!=true)
   {
     alert("Please enter a valid board name for matriculation");
     return false;
   }
   let r = document.forms["regd"]["per1"].value;
    if(r == "" || /[0-9]/.test(r)!=true || r<60 || r>100)
    {
      alert("Please enter a valid percentage for matriculation");
      return false;
    }
 
    let s = document.forms["regd"]["divs1"].value;
    if(s == "" || /^[A-Z a-z]+$/.test(s)!=true)
    {
      alert("Please enter a valid division for matriculation");
      return false;
    }
 
    let q2 = document.forms["regd"]["board2"].value;
    if(q2 == "" || /^[A-Z a-z]+$/.test(q2)!=true)
    {
      alert("Please enter a valid board name for intermediate");
      return false;
    }
 
    let r2 = document.forms["regd"]["per2"].value;
    if(r2 == "" || /[0-9]/.test(r2)!=true || r2<60 || r2>100)
    {
      alert("Please enter a valid percentage for intermediate");
      return false;
    }
 
    let s2 = document.forms["regd"]["divs2"].value;
    if(s2 == "" || /^[A-Z a-z]+$/.test(s2)!=true)
    {
      alert("Please enter a valid division for intermediate");
      return false;
    }
 
    let q3 = document.forms["regd"]["board3"].value;
    if(q3 == "" || /^[A-Z a-z]+$/.test(q3)!=true)
    {
      alert("Please enter a valid university name for BTech");
      return false;
    }
 
    let r3 = document.forms["regd"]["per3"].value;
    if(r3 == "" || /[0-9]/.test(r2)!=true || r3<6.5 || r3>10)
    {
      alert("Please enter a valid CGPA for BTech");
      return false;
    }
 
    let s3 = document.forms["regd"]["divs3"].value;
    if(s3 == "" || /^[A-Z a-z]+$/.test(s3)!=true)
    {
      alert("Please enter a valid division for BTech");
      return false;
    }
 
    var input = document.getElementById('pic');
    if (!input.files) 
    {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
      return false;
    }
    else if (!input.files[0]) 
    {
      alert("Please upload your photo before clicking Submit");
      return false;
    }
    else 
    {
      var file = input.files[0];
      if(file.size/1024<50 || file.size/1024>100)
      {
        alert("Photo size should be be 50kb to 100kb");
        return false;
      }
    }
  
    var input2 = document.getElementById('sign');
    if (!input2.files) 
    {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
      return false;
    }
    else if (!input2.files[0]) 
    {
      alert("Please upload your signature before clicking Submit");
      return false;
    }
    else 
    {
      var file2 = input2.files[0];
      if(file2.size/1024<10 || file2.size/1024>30)
      {
        alert("Signature size should be be 10kb to 30kb");
        return false;
      }
    }
  
    if(document.getElementById('dec').checked==false)
    {
      alert('You must agree to the declaration');
      return false;
    }
   alert("Form submitted successfully")
  }
