const userSocialMedia = {
  github: "Thisgo1",
  instagram: "thisgo.png",
  twitter: "GolfinhoGrande",
  facebook: "thiago.sivaribeiro",
  youtube: "TheCaixaGamer",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    console.log(
      (li.children[0].href = `https://www.${social}.com.br/${userSocialMedia[social]}/`)
    );
  }
};
changeSocialMediaLinks();

function getGitHubProfilesInfos(){
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      userName.textContent = data.name 
      userBio.textContent = data.bio
      userAvatar.src = data.avatar_url
      userUrl.href = data.html_url
      userLogin.textContent = data.login
    })
    };

getGitHubProfilesInfos()
