		//gender section
		function getGender(){
			if (document.getElementById('male').checked == true) {
				var gen = "Male";
				
		    } else if (document.getElementById('female').checked == true) {
				var gen = "Female";
			} 
			else{
					var gen=" ";
			}
			return gen;
		}
        //checkbox getValue function section
		var selectedItems="";
			function getValue(lang){
				
				if(lang === "C/C++"){
				if(Language[0].IsEnabled){
					document.getElementById("c").checked = false;
					Language[0].IsEnabled=false;
					
				}
				else{
				document.getElementById("c").checked = true;
				Language[0].IsEnabled=true;
				selectedItems+=Language[0].LanguageName+"\n";
				}
				}
				
				if(lang === "Java"){
				if(Language[1].IsEnabled){
					selectedItems+=Language[1].LanguageName+"\n";
					document.getElementById("j").checked = false;
					Language[1].IsEnabled=false;
					
				}
				else{
				document.getElementById("j").checked = true;
				Language[1].IsEnabled=true;
				selectedItems+=Language[1].LanguageName+"\n"
				}
				}
				
				if(lang === "C#"){
				if(Language[2].IsEnabled){
					selectedItems+=Language[2].LanguageName+"\n";
					document.getElementById("c1").checked = false;
					Language[2].IsEnabled=false;
					
				}
				else{
				document.getElementById("c1").checked = true;
				Language[2].IsEnabled=true;
				selectedItems+=Language[2].LanguageName+"\n";
				}
				}
				
				if(lang === "PHP"){
				if(Language[3].IsEnabled){
					document.getElementById("p").checked = false;
					Language[3].IsEnabled=false;
					
				}
				else{
				document.getElementById("p").checked = true;
				Language[3].IsEnabled=true;
				selectedItems+=Language[3].LanguageName+"\n";
				}
				}
				
				if(lang === "Python"){
				if(Language[4].IsEnabled){
					document.getElementById("py").checked = false;
					Language[4].IsEnabled=false;
					
				}
				else{
				document.getElementById("py").checked = true;
				Language[4].IsEnabled=true;
				selectedItems+=Language[4].LanguageName+"\n";
				}
				}
				
			}
		    // qualification select box section 
			var  Qualifications = ['--select--','12th', 'Diploma', 'B.tech','M.tech'];
			
			select = document.getElementById( 'qualification' );

			for( var ql= 0; ql<=Qualifications.length;ql++ ) {
    
			select.add( new Option( Qualifications[ql] ) );
    
			};
			
			// experience select box section 
			var  Experiences = ['--select--','Intern', '1 Year', '2 Years','3 Years'];
			select = document.getElementById( 'experience' );

			for( var ex= 0; ex<=Experiences.length;ex++ ) {
    
			select.add( new Option( Experiences[ex] ) );
    
			};
			//checkbox section
			var Language =[
			{
					LanguageName:"C/C++",
					IsEnabled:false
			},
			{
					LanguageName:"Java",
					IsEnabled:true
			},
			{
					LanguageName:"C#",
					IsEnabled:true
			},
			{
					LanguageName:"PHP",
					IsEnabled:false
			},
			{
					LanguageName:"Python",
					IsEnabled:false
			}
			];
		
				document.getElementById("c/c++").innerHTML = Language[0].LanguageName;
				document.getElementById("java").innerHTML = Language[1].LanguageName;
				document.getElementById("c#").innerHTML = Language[2].LanguageName;
				document.getElementById("php").innerHTML = Language[3].LanguageName;
				document.getElementById("python").innerHTML = Language[4].LanguageName;
				document.getElementById("j").checked = Language[1].IsEnabled;
				document.getElementById("c1").checked = Language[2].IsEnabled;

			//submit button section 
				
				
				function details(){ 
				var emp = {
					
					 FirstName : document.getElementById("firstName").value,
					 LastName : document.getElementById("lastName").value,
					 em : document.getElementById("email").value,
					 ph : document.getElementById("contact").value,
					 add : document.getElementById("address").value,
					 Un : document.getElementById("Uname").value,
					 key : document.getElementById("pwd").value,
					 gnd : getGender(),
					 ql : Qualifications[document.getElementById("qualification").selectedIndex],
					 exp : Experiences[document.getElementById("experience").selectedIndex],
					 Items : selectedItems,
					
				};
					console.log(emp);
				}