<script>
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});
</script>

# johnkrahenbuhl2.github.io
Public Test for React JS
What is going on with this?
<style>
mark{
    color:red;
}

    /* 1. Enable smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* 2. Make nav sticky */
main > nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

/* 3. ScrollSpy active styles (see JS tab for activation) */
.section-nav li.active > a {
  color: #333;
  font-weight: 500;
}

/* Sidebar Navigation */
.section-nav {
  padding-left: 0;
  border-left: 1px solid #efefef;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: .125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

/** Poor man's reset **/
* {
  box-sizing: border-box;
}

html, body {
  background: #fff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;
}

h1 {
  font-weight: 300;
}

/** page layout **/
main {
  display: grid;
  grid-template-columns: 1fr 15em;
  max-width: 100em;
  width: 90%;
  margin: 0 auto;
}

/** enlarge the sections for this demo, so that we have a long scrollable page **/
section {
  padding-bottom: 20rem;
}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
  
 /* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  -webkit-animation: fadeEffect 1s;
  animation: fadeEffect 1s;
}

/* Fade in tabs */
@-webkit-keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}
  
</style>

<mark>what is DataBase</mark>

**Table of content:**
- [Hello World](#item-one)
- [First Item](#item-two)
- [Second Item](#item-three)

<!-- headings -->
<a id="item-one"></a>
### Hello World
Hello world content goes here

<a id="item-two"></a>
### First Item
First item content goes here

<a id="item-three"></a>
### Second Item
Second item content goes here

### Third Item
You can turn parallel sections to tabs in `html_document` output.

## Results {.tabset}

### Plots

We show a scatter plot in this section.

### Tables

We show the data in this tab.

<main>
  <div>
    <h1>Smooth Scrolling Sticky ScrollSpy Navigation</h1>
    <p><em>Want an explanation of how this works?<br />&rarr; <a href="https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/" target="_top">https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/</a></em></p>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>…</p>
    </section>
    <section id="request-response">
      <h2>Request &amp; Response</h2>
      <p>…</p>
    </section>
    <section id="authentication">
      <h2>Authentication</h2>
      <p>…</p>
    </section>
    <section id="endpoints">
      <h2>Endpoints</h2>
      <section id="endpoints--root">
        <h3>Root</h3>
        <p>…</p>
      </section>
      <section id="endpoints--cities-overview">
        <h3>Cities Overview</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-detail">
        <h3>City Detail</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-config">
        <h3>City Config</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-spots-overview">
        <h3>City Spots Overview</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-spot-detail">
        <h3>City Spot Detail</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-icons-overview">
        <h3>City Icons Overview</h3>
        <p>…</p>
      </section>
      <section id="endpoints--city-icon-detail">
        <h3>City Icon Detail</h3>
        <h2>Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

<div>
  <div class="tab">
    <button class="tablinks" onclick="openCity(event, 'London')">London</button>
    <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
  </div>
  <br>
  <div id="London" class="tabcontent">
    <h3>London</h3>
    <p>London is the capital city of England.</p>
  </div>
  
  <div id="Paris" class="tabcontent">
    <h3>Paris</h3>
    <p>Paris is the capital of France.</p> 
  </div>
  
  <div id="Tokyo" class="tabcontent">
    <h3>Tokyo</h3>
    <p>Tokyo is the capital of Japan.</p>
  </div>
</div>
      </section>
    </section>
    <section id="links">
      <h2>Links</h2>
      <p>…</p>
    </section>
    <section id="expanders">
      <h2>Expanders</h2>
      <p>…</p>
    </section>
    <section id="filters">
      <h2>Filters</h2>
      <p>…</p>
    </section>
  </div>
  <nav class="section-nav">
    <ol>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#request-response">Request &amp; Response</a></li>
      <li><a href="#authentication">Authentication</a></li>
      <li><a href="#endpoints">Endpoints</a>
        <ul>
          <li class=""><a href="#endpoints--root">Root</a></li>
          <li class=""><a href="#endpoints--cities-overview">Cities Overview</a></li>
          <li class=""><a href="#endpoints--city-detail">City Detail</a></li>
          <li class=""><a href="#endpoints--city-config">City Config</a></li>
          <li class=""><a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
          <li class=""><a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
          <li class=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
          <li class=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li>
        </ul>
      </li>
      <li class=""><a href="#links">Links</a></li>
      <li class=""><a href="#expanders">Expanders</a></li>
      <li class=""><a href="#filters">Filters</a></li>
    </ol>
  </nav>
</main>

<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
