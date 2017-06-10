function validate()
{
	var d=document.getElementById('day').value;
	var m=document.getElementById('month').value;
	document.getElementById("day").className = "dropdown";
	document.getElementById("month").className = "dropdown";
	if(textName.value=="")
		document.getElementById("textName").className += " invalid";
	else if(d==0)
		document.getElementById("day").className += " invalidDrop";
	else if(m==0)
		document.getElementById("month").className += " invalidDrop";
	else 
	{
		document.getElementById("day").className = "dropdown";
		document.getElementById("month").className = "dropdown";
		zodiacFinder();		
	}
}
function zodiacFinder()
	{
		var x=document.getElementById('day').value;
		var y=document.getElementById('month').value;
		var name=document.getElementById('textName').value;
		var cards=document.getElementsByClassName('card');
		zodiacSign.style.visibility="visible";
		for(i=0;i<4;i++)
		cards[i].style.visibility="visible";
		spanName.innerHTML="Hi! "+name;
		if((x<=20&&y==1)||(x>=23&&y==12))
			{
				spanZodiac.innerHTML="You are Capricorn";
				zodiacSign.src="./images/signs/capricorn.png";
				zodiacStrength.innerHTML+="Responsible, disciplined, self-control, good managers";
				zodiacWeakness.innerHTML+="Know-it-all, unforgiving, condescending, expecting the worst";
				zodiacLikes.innerHTML+="Family, tradition, music, understated status, quality craftsmanship";
				zodiacDislikes.innerHTML+="Almost everything at some point";
			}	
		else if((x>=21&&y==1)||(x<=19&&y==2))
		{
			spanZodiac.innerHTML="You are Aquarius";
			zodiacSign.src="./images/signs/aquarius.png";
			zodiacStrength.innerHTML+="Progressive, original, independent, humanitarian";
			zodiacWeakness.innerHTML+="Runs from emotional expression, temperamental, uncompromising, aloof";
			zodiacLikes.innerHTML+="Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener";
			zodiacDislikes.innerHTML+="Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them";
		}
		else if((x>=20&&y==2)||(x<=20&&y==3))
		{
			spanZodiac.innerHTML="You are Pisces";
			zodiacSign.src="./images/signs/pisces.png";
			zodiacStrength.innerHTML+="Compassionate, artistic, intuitive, gentle, wise, musical";
			zodiacWeakness.innerHTML+="Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr";
			zodiacLikes.innerHTML+="Being alone, sleeping, music, romance, visual media, swimming, spiritual themes";
			zodiacDislikes.innerHTML+="Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind";
		}
		else if((x>=21&&y==3)||(x<=19&&y==4))
		{	
			spanZodiac.innerHTML="You are Aries";
			zodiacSign.src="./images/signs/aries.png";
			zodiacStrength.innerHTML+="Courageous, determined, confident, enthusiastic, optimistic, honest, passionate";
			zodiacWeakness.innerHTML+="Impatient, moody, short-tempered, impulsive, aggressive";
			zodiacLikes.innerHTML+="Comfortable clothes, taking on leadership roles, physical challenges, individual sports";
			zodiacDislikes.innerHTML+="Inactivity, delays, work that does not use one's talents";
		}
		else if((x>=21&&y==4)||(x<=21&&y==5))
		{
			spanZodiac.innerHTML="You are Taurus";
			zodiacSign.src="./images/signs/taurus.png";
			zodiacStrength.innerHTML+="Reliable, patient, practical, devoted, responsible, stable";
			zodiacWeakness.innerHTML+="Stubborn, possessive, uncompromising";
			zodiacLikes.innerHTML+="Gardening, cooking, music, romance, high quality clothes, working with hands";
			zodiacDislikes.innerHTML+="Sudden changes, complications, insecurity of any kind, synthetic fabrics";
		}
		else if((x>=22&&y==5)||(x<=21&&y==6))
		{	
			spanZodiac.innerHTML="You are Gemini";
			zodiacSign.src="./images/signs/gemini.png";
			zodiacStrength.innerHTML+="Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas";
			zodiacWeakness.innerHTML+="Nervous, inconsistent, indecisive";
			zodiacLikes.innerHTML+="Music, books, magazines, chats with nearly anyone, short trips around the town";
			zodiacDislikes.innerHTML+="Being alone, being confined, repetition and routine";

		}
		else if((x>=22&&y==6)||(x<=22&&y==7))
		{	
			spanZodiac.innerHTML="You are Cancer";
			zodiacSign.src="./images/signs/cancer.png";
			zodiacStrength.innerHTML+="Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive";
			zodiacWeakness.innerHTML+="Moody, pessimistic, suspicious, manipulative, insecure";
			zodiacLikes.innerHTML+="Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends";
			zodiacDislikes.innerHTML+="Strangers, any criticism of Mom, revealing of personal life";
		}
		else if((x>=23&&y==7)||(x<=21&&y==8))
		{	
			spanZodiac.innerHTML="You are Leo";
			zodiacSign.src="./images/signs/leo.png";
			zodiacStrength.innerHTML+="Creative, passionate, generous, warm-hearted, cheerful, humorous";
			zodiacWeakness.innerHTML+="Arrogant, stubborn, self-centered, lazy, inflexible";
			zodiacLikes.innerHTML+="Theater, taking holidays, being admired, expensive things, bright colors, fun with friends";
			zodiacDislikes.innerHTML+="Being ignored, facing difficult reality, not being treated like a king or queen";		
		}
		else if((x>=22&&y==8)||(x<=23&&y==9))
		{
			spanZodiac.innerHTML="You are Vigro";
			zodiacSign.src="./images/signs/virgo.png";
			zodiacStrength.innerHTML+="Loyal, analytical, kind, hardworking, practical";
			zodiacWeakness.innerHTML+="Shyness, worry, overly critical of self and others, all work and no play";
			zodiacLikes.innerHTML+="Animals, healthy food, books, nature, cleanliness";
			zodiacDislikes.innerHTML+="Rudeness, asking for help, taking center stages";
		}
		else if((x>=24&&y==9)||(x<=23&&y==10))
		{
			spanZodiac.innerHTML="You are Libra";
			zodiacSign.src="./images/signs/libra.png";
			zodiacStrength.innerHTML+="Cooperative,diplomatic, gracious, fair-minded, social";
			zodiacWeakness.innerHTML+="Indecisive, avoids confrontations, will carry a grudge, self-pity";
			zodiacLikes.innerHTML+="Harmony, gentleness, sharing with others, the outdoors";
			zodiacDislikes.innerHTML+="Violence, injustice, loudmouths, conformity";
		}	
		else if((x>=24&&y==10)||(x<=22&&y==11))
		{
			spanZodiac.innerHTML="You are Scorpio";
			zodiacSign.src="./images/signs/scorpio.png";
			zodiacStrength.innerHTML+="Resourceful, brave, passionate, stubborn, a true friend";
			zodiacWeakness.innerHTML+="Distrusting, jealous, secretive, violent";
			zodiacLikes.innerHTML+="Truth, facts, being right, longtime friends, teasing, a grand passion";
			zodiacDislikes.innerHTML+="Dishonesty, revealing secrets, passive people";
		}
		else if((x>=23&&y==11)||(x<=22&&y==12))
		{	
			spanZodiac.innerHTML="You are Sagittarius";
			zodiacSign.src="./images/signs/sagittarius.png";
			zodiacStrength.innerHTML+="Generous, idealistic, great sense of humor";
			zodiacWeakness.innerHTML+="Promises more than can deliver, very impatient, will say anything no matter how undiplomatic";
			zodiacLikes.innerHTML+="Freedom, travel, philosophy, being outdoors";
			zodiacDislikes.innerHTML+="Clingy people, being constrained, off-the-wall theories, details";
		}
	}