(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();function g(){const e=window.location.pathname;return`
    <nav class="navbar">
      <div class="container">
        <a href="/" class="nav-logo">MAJIYOUNG</a>
        <div class="nav-links">
          <a href="/" class="nav-link ${e==="/"||e==="/index.html"?"active":""}">HOME</a>
          <a href="/about.html" class="nav-link ${e==="/about.html"?"active":""}">ABOUT</a>
          <a href="/services.html" class="nav-link ${e==="/services.html"?"active":""}">SERVICES</a>
          <a href="/gallery.html" class="nav-link ${e==="/gallery.html"?"active":""}">GALLERY</a>
          <a href="/contact.html" class="nav-link ${e==="/contact.html"?"active":""}">CONTACT</a>
        </div>
        <button class="mobile-menu-btn">☰</button>
      </div>
    </nav>
  `}function v(){return`
    <footer class="footer">
      <div class="container footer-content">
        <div>
          <h3>MAJIYOUNG</h3>
          <p>전문 MC & 강사 마지영입니다.<br>당신의 행사에 품격과 웃음을 더해드립니다.</p>
        </div>
        <div>
          <h3>CONTACT</h3>
          <p class="mb-xs" style="font-weight: 600">소속사: 노리모아 콘텐츠랩</p>
          <p class="mb-xs" style="font-weight: 500">대표: 황해열</p>
          <p class="text-text-invert" style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 0.5rem;">전남 나주시 문화로 238<br>아주드림타워 2차 304호</p>
          <div style="opacity: 0.9;">
            <p>Tel: 061-336-9788</p>
            <p>Mobile: 010-2799-0309</p>
            <p>Email: yull4690@naver.com</p>
          </div>
        </div>
        <div>
          <h3>LINKS</h3>
          <div class="flex flex-col gap-sm">
            <a href="https://blog.naver.com/" target="_blank">Naver Blog</a>
            <a href="https://youtube.com/" target="_blank">YouTube</a>
            <a href="https://instagram.com/" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Majiyoung. All Content Copyright Reserved.</p>
      </div>
    </footer>
  `}const h=document.querySelector("#app"),o=window.location.pathname;let l="";if(o==="/"||o==="/index.html")l=`
    <!-- Hero Section -->
    <!-- Hero Section -->
    <header class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>당신의 행사에<br>품격과 웃음을 더하는<br><span class="text-accent">마지영</span>입니다.</h1>
            <p>전문 MC / 성인 교육 / 실버 교육 / 통합 레크리에이션</p>
            <div class="flex gap-sm justify-center">
              <a href="/contact.html" class="btn btn-primary">강의 의뢰하기</a>
              <a href="/about.html" class="btn btn-outline">소개 더보기</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="/images/instructor_profile.png" alt="마지영 강사 프로필">
          </div>
        </div>
      </div>
    </header>

    <!-- Services Summary -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-lg">
          <h2 class="text-primary text-xl mb-sm">주요 서비스</h2>
          <p class="text-text-light">다양한 맞춤형 프로그램으로 최고의 만족을 드립니다.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          
          <div class="card text-center">
            <div class="service-icon">🎤</div>
            <h3 class="text-lg mb-sm">행사 & 레크리에이션</h3>
            <p class="mb-md text-text-light">전문 MC 진행 및 통합 레크리에이션<br>품격과 재미가 있는 행사</p>
            <a href="/services.html" class="text-primary" style="font-weight: 600;">자세히 보기 →</a>
          </div>

          <div class="card text-center">
            <div class="service-icon">💃</div>
            <h3 class="text-lg mb-sm">성인 교육</h3>
            <p class="mb-md text-text-light">요가, 라인 댄스로 찾는<br>신체 밸런스와 활력</p>
            <a href="/services.html" class="text-primary" style="font-weight: 600;">자세히 보기 →</a>
          </div>

          <div class="card text-center">
            <div class="service-icon">👵</div>
            <h3 class="text-lg mb-sm">실버 교육</h3>
            <p class="mb-md text-text-light">웃음/음악 치료, 인지 훈련, 뇌 체조 등<br>어르신 맞춤형 힐링 프로그램</p>
            <a href="/services.html" class="text-primary" style="font-weight: 600;">자세히 보기 →</a>
          </div>

          <div class="card text-center">
            <div class="service-icon">🤝</div>
            <h3 class="text-lg mb-sm">사회 공헌</h3>
            <p class="mb-md text-text-light">지역 사회와 함께하는<br>따뜻한 나눔 활동</p>
            <a href="/services.html" class="text-primary" style="font-weight: 600;">자세히 보기 →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Activity Gallery Preview (Placeholder) -->
    <section class="section" style="background-color: var(--color-bg-light);">
      <div class="container">
         <div class="text-center mb-lg">
          <h2 class="text-primary text-xl mb-sm">활동 갤러리</h2>
          <p class="text-text-light">현장의 뜨거운 열기를 확인하세요.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 8px;"></div>
          <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 8px;"></div>
          <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 8px;"></div>
          <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 8px;"></div>
        </div>
        <div class="text-center" style="margin-top: 2rem;">
           <a href="/gallery.html" class="btn btn-outline" style="border-color: var(--color-primary); color: var(--color-primary);">더 많은 사진 보기</a>
        </div>
      </div>
    </section>
  `;else if(o==="/about.html")l=`
    <section class="section header-offset" style="padding-top: 100px;">
      <div class="container">
        <h1 class="text-primary text-xl mb-lg">강사 소개</h1>
        
        <div class="card">
          <div class="flex flex-col items-center gap-md" style="margin-bottom: 2rem;">
            <!-- Profile Image -->
            <div style="width: 250px; height: 250px; overflow: hidden; border-radius: 50%; border: 4px solid var(--color-bg-light); box-shadow: var(--shadow-md);">
              <img src="/images/majiyoung_profile.jpg" alt="마지영 강사" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            
            <div class="text-center">
              <h2 class="text-xl text-primary mb-xs">마지영</h2>
              <p class="text-text-light" style="font-size: 1.1rem; font-weight: 500;">전문 MC / 성인·실버 교육 강사</p>
            </div>
          </div>

          <div style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
            <p class="mb-md">
              안녕하세요, <strong>마지영</strong>입니다.<br>
              저는 사람들과 소통하며 웃음과 행복을 전하는 일을 천직으로 생각합니다.<br>
              수년간의 현장 경험과 전문 지식을 바탕으로, 대상에 맞는 맞춤형 프로그램을 통해 최고의 만족을 드리고자 합니다.
            </p>

            <h3 class="text-lg text-primary mb-sm">주요 활동</h3>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem;" class="text-text-light">
              <li class="mb-xs">노리모아 콘텐츠랩 소속 강사</li>
              <li>다수 관공서, 기업, 복지관 강의 및 행사 진행</li>
            </ul>

            <h3 class="text-lg text-primary mb-sm">보유 자격증</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
              <ul style="list-style-type: disc; padding-left: 1.5rem;" class="text-text-light">
                <li class="mb-xs">노인 두뇌 훈련 지도사 1급</li>
                <li class="mb-xs">아트힐링 퍼포먼스 놀이 지도사 1급</li>
                <li class="mb-xs">실버 레크레이션 지도사 1급</li>
                <li class="mb-xs">웃음 요가 치료사 1급</li>
              </ul>
              <ul style="list-style-type: disc; padding-left: 1.5rem;" class="text-text-light">
                <li class="mb-xs">라인댄스 지도사 1급</li>
                <li class="mb-xs">노래 지도사 1급</li>
                <li class="mb-xs">아동 청소년 심리상담사 2급</li>
                <li class="mb-xs">사회복지사 2급</li>
                <li>성희롱 예방 지도사 수료</li>
              </ul>
            </div>

            <h3 class="text-lg text-primary mb-sm">교육 철학</h3>
            <blockquote style="border-left: 4px solid var(--color-accent); padding-left: 1rem; margin-left: 0; color: var(--color-text-main); font-style: italic;">
              "단순한 지식 전달이 아닌, 마음을 움직이고 삶의 질을 높이는 진정한 '소통'을 지향합니다."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
   `;else if(o==="/services.html"){const e={silver:{title:"실버 교육",desc:"어르신들의 삶의 질 향상과 변화하는 시대 적응을 돕는 어르신 맞춤형 평생 교육 프로그램입니다.",items:[{id:"s1",icon:"😊",title:"웃음 치료",image:"/images/laughter-therapy.jpg",summary:"즐거운 웃음 활동을 통해 스트레스를 해소하고 신체적 면역력과 정서적 행복감을 높여줍니다.",detail:"웃음은 최고의 보약입니다. 뇌를 속이는 억지 웃음부터 배꼽 잡는 통쾌한 웃음까지, 다양한 기법으로 어르신들의 우울감을 해소하고 긍정적인 에너지를 불어넣습니다."},{id:"s2",icon:"🎵",title:"음악 치료",image:"/images/music-therapy.jpg",summary:"노래 부르기, 악기 연주 등 음악 활동을 통해 심리적 안정을 찾고 인지 및 신체 기능을 회복합니다.",detail:"흘러간 옛 노래를 함께 부르며 추억을 회상하고, 소도구 악기를 활용한 리듬 활동으로 소근육 발달과 인지 기능 유지를 돕습니다."},{id:"s3",icon:"🧠",title:"인지 훈련",image:"/images/cognitive-training.jpg",summary:"기억력, 집중력 등을 강화하는 두뇌 활동을 통해 치매를 예방하고 인지 기능을 유지·개선합니다.",detail:"치매 예방 전문 프로그램을 기반으로, 숫자 놀이, 단어 맞추기, 패턴 기억하기 등 즐겁게 참여할 수 있는 두뇌 훈련 게임을 진행합니다."},{id:"s4",icon:"💪",title:"뇌 체조",image:"/images/brain-gymnastics.jpg",summary:"손과 몸을 활용한 동작으로 뇌를 자극하여 두뇌 활성화와 유연성을 높이는 신체 활동입니다.",detail:"좌뇌와 우뇌를 골고루 자극하는 손가락 유희, 전신 스트레칭, 건강 박수 등을 통해 신체 활력을 증진시킵니다."}]},adult:{title:"성인 교육",items:[{id:"a1",icon:"🧘‍♀️",title:"요가",image:"/images/yoga-class.jpg",summary:"호흡과 스트레칭을 통해 틀어진 몸의 균형을 바로잡고 심신의 안정을 찾는 수련 활동입니다.",detail:"현대인의 지친 몸과 마음을 치유하는 힐링 요가. 바른 자세 교정과 스트레스 해소에 탁월합니다."},{id:"a2",icon:"💃",title:"라인 댄스",image:"/images/line-dance.jpg",summary:"여러 사람이 줄을 맞춰 음악에 따라 동일한 동작을 반복하며 즐기는 신나는 유산소 댄스 운동입니다.",detail:"누구나 쉽게 따라 할 수 있는 동작으로 구성되어 있으며, 파트너 없이도 즐길 수 있는 건전하고 활기찬 댄스 스포츠입니다."}]},event:{title:"행사 & 레크리에이션",items:[{id:"e1",icon:"🎤",title:"단체 행사 MC",image:"/images/event-mc.jpg",summary:"행사의 성격과 대상에 맞춰 분위기를 띄우고 매끄러운 진행을 책임지는 전문 사회자 서비스입니다.",detail:"공식 행사, 워크숍, 체육대회, 송년회 등 T.P.O에 맞는 품격 있고 유쾌한 진행으로 행사의 완성도를 높여드립니다."},{id:"e2",icon:"🎉",title:"통합 레크리에이션",image:"/images/recreation.jpg",summary:"다양한 게임과 놀이를 통해 참여자 간의 소통을 돕고 화합과 즐거움을 이끌어내는 활동입니다.",detail:"팀 빌딩, 아이스 브레이킹 등 참여자들의 서먹함을 없애고 하나가 될 수 있는 참여형 프로그램을 운영합니다."},{id:"e3",icon:"🏢",title:"기업 워크샵 진행",image:"/images/corporate-workshop.jpg",summary:"조직 활성화와 팀워크 강화를 위한 기업 맞춤형 워크샵 프로그램입니다.",detail:"아이스 브레이킹, 팀 빌딩 게임, 소통 특강 등 기업의 니즈에 맞춘 프로그램 구성을 통해 임직원 간의 화합과 사기 진작을 도모합니다."},{id:"e4",icon:"🏆",title:"기업 체육대회 진행",image:"/images/corporate-sports-day.jpg",summary:"모두가 하나 되어 즐길 수 있는 안전하고 신나는 명랑 운동회 및 체육대회입니다.",detail:"안전을 최우선으로 하여 남녀노소 누구나 참여할 수 있는 종목을 선정하고, 질서 정연하면서도 열정적인 분위기를 연출합니다."},{id:"e5",icon:"🎆",title:"축제 및 지역 행사",image:"/images/festival.jpg",summary:"지역 주민과 함께 호흡하며 축제의 흥을 돋우는 전문 진행 서비스입니다.",detail:"지역 축제, 문화 행사, 마을 잔치 등 행사의 성격을 파악하여 관객과 소통하며 즐거움과 감동을 선사하는 맞춤형 진행을 제공합니다."}]},social:{title:"사회 공헌",items:[{id:"vo1",icon:"🤝",title:"사회 복지 재능 기부",image:"/images/talent-donation.jpg",summary:"자신이 가진 전문 기술이나 재능을 활용하여 지역 사회와 소외 계층을 돕는 자발적 나눔 활동입니다.",detail:"찾아가는 봉사 활동, 무료 공연 및 강의 등을 통해 지역 사회에 선한 영향력을 전파하고 있습니다."}]},school:{title:"학교 교육",items:[{id:"vo2",icon:"🏫",title:"초중고 자원 봉사 교육",image:"/images/volunteer-education.jpg",summary:"청소년들에게 올바른 자원봉사 가치관을 심어주는 교육 프로그램입니다.",detail:"자원봉사의 의미와 가치, 봉사자의 자세, 다양한 봉사 활동 사례 등을 교육하여 청소년들이 건강한 시민으로 성장하도록 돕습니다."},{id:"vo3",icon:"🚭",title:"초중고 금연 교육",image:"/images/smoking-cessation.jpg",summary:"성장기 청소년들에게 흡연의 폐해를 알리고 올바른 가치관을 심어주는 건강 교육입니다.",detail:"학교 현장에 찾아가 담배의 유해성을 과학적으로 알리고, 흡연 예방 및 금연 실천 의지를 다지는 맞춤형 교육을 진행합니다."}]}},a=s=>s.map(t=>{let i="";return t.image&&(i=`
          <div style="margin: -1rem -1rem 1rem -1rem; height: 180px; overflow: hidden; border-radius: 8px 8px 0 0;">
            <img src="${t.image}" alt="${t.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        `),`
       <div class="service-item-clickable" onclick="window.openServiceModal('${t.id}')" style="position: relative; overflow: hidden;">
         ${i}
         <h3 class="text-primary-dark mb-xs" style="font-weight: 700;">${t.icon} ${t.title}</h3>
         <p class="text-text-light" style="font-size: 0.95rem;">${t.summary}</p>
         <p class="text-primary" style="font-size: 0.8rem; margin-top: 5px; font-weight: 600;">+ 자세히 보기</p>
       </div>
     `}).join(""),d={};Object.values(e).forEach(s=>{s.items.forEach(t=>d[t.id]=t)}),window.openServiceModal=s=>{const t=d[s];if(!t)return;const i=document.getElementById("modal-title");document.getElementById("modal-icon");const r=document.getElementById("modal-desc"),m=document.getElementById("service-modal");i&&(i.innerText=t.title);const c=document.getElementById("modal-icon");c&&(t.image?c.innerHTML=`<img src="${t.image}" alt="${t.title}" style="max-width: 100%; height: auto; border-radius: 8px;">`:c.innerText=t.icon),r&&(r.innerHTML=`<p class="mb-md text-lg" style="font-weight:500">${t.summary}</p><p class="text-text-light" style="line-height:1.8">${t.detail}</p>`),m&&m.classList.add("open")},window.closeServiceModal=()=>{const s=document.getElementById("service-modal");s&&s.classList.remove("open")},l=`
    <section class="section header-offset" style="padding-top: 100px; background-color: var(--color-bg-light); min-height: 100vh;">
      <div class="container">
        <h1 class="text-primary text-xl mb-md">프로그램 안내</h1>
        <p class="mb-lg text-text-light">마지영 강사가 제공하는 전문 프로그램을 소개합니다. 각 항목을 클릭하면 상세 내용을 확인하실 수 있습니다.</p>
        
        <div class="flex flex-col gap-md">

          <div class="card">
            <h2 class="text-primary text-lg mb-sm" style="border-bottom: 2px solid var(--color-bg-light); padding-bottom: 10px;">${e.event.title}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
              ${a(e.event.items)}
            </div>
          </div>

          <div class="card">
            <h2 class="text-primary text-lg mb-sm" style="border-bottom: 2px solid var(--color-bg-light); padding-bottom: 10px;">${e.adult.title}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
               ${a(e.adult.items)}
            </div>
          </div>

          <div class="card">
            <h2 class="text-primary text-lg mb-sm" style="border-bottom: 2px solid var(--color-bg-light); padding-bottom: 10px;">${e.silver.title}</h2>
            <p class="mb-md text-text-light">${e.silver.desc}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
              ${a(e.silver.items)}
            </div>
          </div>

          <div class="card">
             <h2 class="text-primary text-lg mb-sm" style="border-bottom: 2px solid var(--color-bg-light); padding-bottom: 10px;">${e.school.title}</h2>
             <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
               ${a(e.school.items)}
             </div>
          </div>

          <div class="card">
             <h2 class="text-primary text-lg mb-sm" style="border-bottom: 2px solid var(--color-bg-light); padding-bottom: 10px;">${e.social.title}</h2>
             <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
               ${a(e.social.items)}
             </div>
          </div>

        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
           <h3 class="mb-sm">강의 및 행사 문의가 필요하신가요?</h3>
           <a href="/contact.html" class="btn btn-primary">문의하기</a>
        </div>
      </div>
    </section>

    <!-- Generic Modal -->
    <div id="service-modal" class="modal-overlay" onclick="if(event.target === this) window.closeServiceModal()">
      <div class="modal-content">
        <button class="modal-close" onclick="window.closeServiceModal()">✕</button>
        <div class="text-center mb-md">
          <div id="modal-icon" style="font-size: 4rem; margin-bottom: 1rem;"></div>
          <h2 id="modal-title" class="text-primary text-xl"></h2>
        </div>
        <div id="modal-desc" class="text-left"></div>
        <div class="text-center" style="margin-top: 2rem;">
          <button class="btn btn-primary" onclick="window.location.href='/contact.html'">문의하기</button>
        </div>
      </div>
    </div>
   `}else o==="/gallery.html"?l=`
    <section class="section header-offset" style="padding-top: 100px;">
      <div class="container">
        <h1 class="text-primary text-xl mb-md">활동 갤러리</h1>
        <p>사진과 영상을 확인하세요.</p>
        <!-- Grid placeholder -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-top: 20px;">
           <div style="height: 200px; background: #eee;"></div>
           <div style="height: 200px; background: #eee;"></div>
           <div style="height: 200px; background: #eee;"></div>
           <div style="height: 200px; background: #eee;"></div>
        </div>
      </div>
    </section>
   `:o==="/contact.html"?l=`
    <section class="section header-offset" style="padding-top: 100px; padding-bottom: 80px; min-height: 80vh; background-color: var(--color-bg-light);">
      <div class="container text-center">
        <h1 class="text-primary text-xl mb-lg">문의하기</h1>
        
        <div class="card" style="max-width: 1000px; margin: 0 auto; padding: 3rem 2rem;">
          <h3 class="text-lg text-primary-dark mb-lg" style="font-weight: 700;">강의 의뢰 및 섭외 문의</h3>
          
          <div style="display: flex; flex-direction: column; gap: 2rem; width: 100%; max-width: 800px; margin: 0 auto; text-align: left;">
            
            <!-- Agency -->
            <div class="flex items-center gap-md">
               <div style="font-size: 2rem; width: 50px; text-align: center;">🏢</div>
               <div>
                 <p class="text-text-light" style="font-size: 0.9rem; margin-bottom: 0.2rem;">소속사</p>
                 <p style="font-weight: 600; font-size: 1.15rem; color: var(--color-text-main); margin-bottom: 0.2rem;">노리모아 콘텐츠랩</p>
                 <div class="flex items-center gap-sm">
                   <a href="tel:061-336-9788" class="text-text-light" style="font-size: 1rem;">061-336-9788</a>
                   <a href="tel:061-336-9788" class="btn btn-outline btn-sm" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;">전화 걸기</a>
                 </div>
               </div>
            </div>

            <!-- Person/Phone -->
            <div class="flex items-center gap-md">
               <div style="font-size: 2rem; width: 50px; text-align: center;">📞</div>
               <div>
                 <p class="text-text-light" style="font-size: 0.9rem; margin-bottom: 0.2rem;">황해열 대표</p>
                 <div class="flex items-center gap-sm" style="margin-bottom: 0.2rem;">
                   <a href="tel:010-2799-0309" class="text-primary" style="font-weight: 700; font-size: 1.3rem;">010-2799-0309</a>
                   <a href="tel:010-2799-0309" class="btn btn-outline btn-sm" style="padding: 0.2rem 0.6rem; font-size: 0.8rem; border-color: var(--color-primary); color: var(--color-primary);">전화 걸기</a>
                 </div>
                 <a href="mailto:yull4690@naver.com" class="text-text-light" style="font-size: 1rem; text-decoration: underline;">yull4690@naver.com</a>
               </div>
            </div>

            <!-- Address -->
            <div class="flex items-center gap-md">
               <div style="font-size: 2rem; width: 50px; text-align: center;">📍</div>
               <div>
                 <p class="text-text-light" style="font-size: 0.9rem; margin-bottom: 0.2rem;">위치</p>
                 <p style="line-height: 1.5; font-size: 1.05rem;">전라남도 나주시 문화로 238<br>아주드림타워 2차 304호</p>
            </div>



            <!-- Map moved below -->

          </div>

          <!-- Location Map (Iframe) -->
          <div style="width: 100%; height: 360px; overflow: hidden; border-radius: 8px; box-shadow: var(--shadow-sm); margin-top: 2rem;">
             <iframe src="/map.html" title="Kakao Map" style="width: 100%; height: 100%; border: none;"></iframe>
          </div>



        </div>
      </div>
    </section>
  `:l=`
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <h1>404 Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <a href="/" class="text-primary">홈으로 돌아가기</a>
      </div>
    </section>
   `;h.innerHTML=`
  ${g()}
  <main>
    ${l}
  </main>
  ${v()}
`;const n=document.querySelector(".mobile-menu-btn"),p=document.querySelector(".nav-links");n&&p&&n.addEventListener("click",()=>{p.classList.toggle("open")});
