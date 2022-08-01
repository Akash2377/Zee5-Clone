function navbar(){
    return `
    <div id="navbar">
      <div id="box1">
        <ul>
          <li>
            <img
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.50.94"
              id="logo"
              title="Zee5logo"
              alt="Zee% lOgo"
            />
          </li>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./tvshow.html">TV Shows</a>
          </li>
          <li>
            <a href="./movies.html">Movies</a>
          </li>
          <li>
            <a href="webseries_single.html">Web Series</a>
          </li>
          <li>
            <a href="./music.html">News</a>
          </li>
          <li id="menu">
            <a href="#"
              ><i class="fa-solid fa-ellipsis-vertical"></i
              ><i class="fa-solid fa-ellipsis-vertical"></i
              ><i class="fa-solid fa-ellipsis-vertical"></i
            ></a>
            <ul>
              <li>
                <a
                  href="./Buyplan1.html"
                  title="Zee5 Premium Package Subscription"
                  >Premium</a
                >
              </li>
              <li>
                <a href="./music.html" title="Watch Music Videos Online"
                  >Music</a
                >
              </li>
              <li>
                <a href="./more2.html" title="Rent & Watch Movies on ZEEFEX"
                  >ZEEFLEX</a
                >
              </li>
              <li>
                <a href="./playvideo.html" title="Play Games Online">Play</a>
              </li>
              <li><a href="./about.html" title="Articles">Articles</a></li>
              <li>
                <a
                  href="./more.html"
                  title="Watch Kids Shows, Cartoons,Movies & Videos Online"
                  >Kids</a
                >
              </li>
              <li>
                <a href="./search.html" title="Watch Official Fims Videos"
                  >Videos</a
                >
              </li>
              <li>
                <a href="./webseries_single.html" title="Stories">Stories</a>
              </li>
              <li><a href="./music.html">Channels</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="box2">
        <ul>
          <li style="margin-top: -5px">
            <a href="./search.html"
              ><i class="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="Login.html"> <button id="log">LOGIN</button></a>
          </li>
          <li>
            <a href="Buyplan1.html">
              <button id="buy">
                <i class="fa-solid fa-crown"></i> BUY PLAN
              </button></a
            >
          </li>
          <li id="menu11" style="color: #fff; cursor: pointer">
            <i title="Menu" class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </div>
      <div id="menu1">
        <div class="submenu1">
          <a href="index.html"> Home</a>
        </div>
        <div class="submenu1">
          <button class="accordion1">
            <p>Explore</p>
            <span class="arrow"><i class="fa-solid fa-sort-down"></i></span>
          </button>
          <div class="panel1">
            <a href="./Buyplan1.html">Premium</a>
            <a href="./music.html">Music</a>
            <a href="./about.html">About Us</a>
            <a href="./helpcenter.html">Help Center</a>
            <a href="./search.html">Videos</a>
          </div>
        </div>
        <div class="submenu1">
          <a href="./tvshow.html">Tv Show</a>
        </div>
        <div class="submenu1">
          <a href="./webseries_single.html">Web Series</a>
        </div>
        <div class="submenu1">
          <a href="./movies.html">Movies</a>
        </div>
        <div class="submenu1">
          <a href="./music.html">Music</a>
        </div>
        <div class="submenu1">
          <a href="./search.html">Videos</a>
        </div>
      </div>
    </div>`;
}

export default navbar;