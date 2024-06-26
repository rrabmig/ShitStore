import React from 'react'
import classes from './aboutPage.module.css'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'

const AboutPage = () => {
  return (
    <div className={classes.aboutPage}>

      <Header/>
      <div className={classes.afterHeader}>
        <h1>
          Постоянное развитие - наш главный принцип.<br/> Унайте с чего все начиналось.
        </h1>
      </div>
      
      <div className={classes.articleContainer}>
        <div className={classes.article}>
          <h2>История развития компании "NavozStore"</h2>
          <p>Бизнес компании "NavozStore" начался с идеи молодого предпринимателя по имени Александр. Будучи страстным сторонником экологического образа жизни, Александр задумался о создании предприятия, которое занималось бы производством экологически чистой еды и удобрений, способствующих здоровому росту растений.</p>
          <p>В начале пути компания "NavozStore" была небольшой семейным бизнесом. Александр и его семья выращивали овощи и фрукты на своем небольшом участке земли, не используя химические удобрения или пестициды. Продукция компании была продана на местных рынках и быстро завоевала популярность среди любителей здорового питания.</p>
          <p>Со временем спрос на экологически чистую продукцию стал расти, и компания "NavozStore" расширила свою деятельность. Александр начал проводить исследования по созданию уникальных органических удобрений, которые позволяли бы увеличить урожайность без вреда для окружающей среды.</p>
          <p>С каждым годом компания "NavozStore" становилась все более известной и успешной. Она установила собственные производственные линии для производства органической еды и удобрений, и начала поставлять свою продукцию не только по всей стране, но и за ее пределы.</p>
          <p>Сегодня компания "NavozStore" отмечает свое сорокалетие как лидер на рынке экологически чистой продукции. Ее удобрения и продукты пользуются популярностью не только среди людей, заботящихся о своем здоровье, но и среди фермеров и садоводов, стремящихся к устойчивому и экологически чистому сельскому хозяйству. </p>
          <p>История компании "NavozStore" - это история о том, как мечта и стремление к созданию здоровой и экологически чистой продукции привели к успеху и признанию как в масштабах страны, так и за ее пределами.</p>
        </div>
        <div className={classes.photos}>
          <div 
            className={classes.photo1}
            data-aos='fade-left'
            data-aos-easing='ease-in-sine'
            data-aos-duration='5000'
            data-aos-once='true'
            data-aos-anchor-placement="center-bottom"
          >
            <img 
              className={classes.img}
              src='https://sun9-77.userapi.com/impg/Wrjl76lntFMcFZeFwIu61nDU7cKLaGa9HTuYZQ/oCY79tTM0IQ.jpg?size=1024x775&quality=95&sign=ddf8c445eafe313d1546345155e9d527&c_uniq_tag=6RrZUhJcCzYMy_vwivFpEnOcRdKlmTDpCKnjQLOZGH0&type=album' 
              alt='oldferm'
             
            />
            <p>Ферма "Золотая лужа" 1980-е</p>
          </div>
          <div 
            className={classes.photo2}
            data-aos='fade-left'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
          >
            <img 
              className={classes.img}
              src='https://pro-dachnikov.com/uploads/posts/2022-01/1642386782_13-pro-dachnikov-com-p-sovremennie-korovniki-foto-17.jpg' 
              alt='oldferm'
            />
            <p>Ферма "Золотая лужа" 2021г.</p>
          </div>
        </div>
      </div>


      <div className={classes.articleContainer}>
        <div className={classes.photos}>
          <div className={classes.photo3}>
              <img 
                className={classes.img}
                src='https://bilder.bild.de/fotos/tiere-zum-mieten-45490310/Bild/1.bild.jpg' 
                alt='oldferm'
                data-aos='fade-right'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
              />
          </div>
          <div className={classes.photo4}>
              <img 
                className={classes.img}
                src='https://otvet.imgsmail.ru/download/279589980_7c009a289980f21170dcb01a52fe705b_800.jpg' 
                alt='oldferm'
                data-aos='fade-right'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
              />
          </div>
        </div>
        <div className={classes.article}>
          <h2> Открытиие куриного сока </h2>
          <p>Однажды Александр, основатель компании "NavozStore", решил приготовить себе свежий яблочный сок. Он купал курицу и готовился положить яблоки в блендер, чтобы приготовить напиток. Но вдруг его рука подскользнулась, и курица случайно упало включенный блендер.</p>
          <p>Александр был в шоке и испуганно отвернулся, ожидая, что весь блендер будет испорчен. Однако, когда он осторожно открыл крышку, он обнаружил в блендере нечто неожиданное - свежий и ароматный куриный сок! Курица была полностью размельчена и превратилось в вкусный напиток.</p>
          <p>Удивленный открытием, Александр попробовал свежевыжатый куриный сок и был приятно удивлен его вкусом и ароматом. Он решил поделиться своим открытием с семьей и друзьями, и все они оценили натуральный вкус и полезные свойства этого куриного сока.</p>
          <p>Таким образом, случайное падение курицы в блендер привело к неожиданному и вкусному открытию для Александра. С этого момента свежевыжатый куриный сок стал одним из популярных продуктов компании "NavozStore", основанной на принципах натуральности и заботы о здоровье.</p>
        </div>
      </div>


      <div className={classes.articleContainer}>
        <div className={classes.article}>
          <h2> Из мусора - в сок</h2>
          <p>Александр, основатель компании "Зеленая земля", всегда был сторонником устойчивого потребления и переработки мусора. Он был вдохновлен идеей создания инновационного процесса по использованию мусорных пакетов для производства экологически чистого сока. </p>
          <p>Однажды, Александр провел эксперименты с переработкой пластиковых мусорных пакетов и обнаружил, что они могут быть использованы для выжимания сока из остатков гнилой пищи. После тщательных тестов и исследований он пришел к выводу, что этот процесс не только экологически безопасен, но и позволяет эффективно перерабатывать отходы.</p>
          <p>Увлеченный новой идеей, Александр решил масштабировать проект и начал нанимать людей для выжимания сока из мусорных пакетов. Он обучил своих сотрудников технологии переработки их вторсырья, чтобы использовать их в производстве свежего и натурального сока. </p>
          <p>Благодаря усилиям и творческому подходу Александра и его команды, компания "Зеленая земля" стала пионером в области устойчивого производства и переработки отходов. Их экологически чистый сок из мусорных пакетов стал популярен и признан как инновационный продукт, способствующий охране окружающей среды.</p>
        </div>
        <div className={classes.photos}>
          <div className={classes.photo3}>
              <img 
                className={classes.img}
                src='http://верх-исетский.екатеринбург.рф/media/news/news_93513_image_900x_.jpg' 
                alt='oldferm'
                data-aos='fade-left'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
              />
          </div>
          <div className={classes.photo1}>
              <img 
                className={classes.img}
                src='https://vmolo.by/wp-content/uploads/2019/07/2-61.jpg' 
                alt='oldferm'
                data-aos='fade-left'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
              />
          </div>
        </div>
      </div>
      <div className={classes.articleContainer}>
        <div className={classes.photos}>
          <div className={classes.photo5}> 
            <img 
                  className={classes.img}
                  src='https://a.d-cd.net/nIAAAgIcR-A-1920.jpg' 
                  alt='oldferm'
                  data-aos='fade-right'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
                />
          </div>
          <div className={classes.photo6}> 
            <img 
                  className={classes.img}
                  src='https://eda-offline.com/wp-content/uploads/2018/10/god-svinji-11.jpg' 
                  alt='oldferm'
                  data-aos='fade-right'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='5000'
                  data-aos-once='true'
                  data-aos-anchor-placement="center-bottom"
                />
          </div>
        </div>
        <div className={classes.article}>
          <h2>Ферма "Золотая лужа": Искусство первоклассного навоза</h2>
          <p>На ферме "Золотая лужа" все начинается с утра, когда коровы и свиньи просыпаются на своих уютных лагерях. После изысканного завтрака из свежего сена и корма, животные начинают свой рабочий день – создание первоклассного навоза.</p>
          <h3>Коровки Клара и Марта</h3>
          <p>Коровки Клара и Марта – это настоящие звезды на ферме "Золотая лужа". Каждое утро они отправляются на свою любимую поляну для утренней дефекации. С удовольствием жуя сочную травку, они приступают к процессу. С легким и грациозным движением хвостом, Клара и Марта создают композицию из навоза, которая напоминает произведение искусства. Их дефекация - это настоящее творчество, которое вдохновляет всех на ферме. </p>
          <h3>Свиньи Хрюндель и Булька</h3>
          <p>Свиньи Хрюндель и Булька не отстают от своих коровьих соседок. После полного отдыха и обильного завтрака из картошки и зерна, они отправляются на свою часть поляны, чтобы сделать свой вклад в создание первоклассного навоза. С щедрым ощущением удовлетворения после обеда, Хрюндель и Булька тщательно размещают свой навоз в угоду качеству почвы и будущему урожаю.</p>
          <p>
Таким образом, благодаря заботе, любви и творчеству коровок и свинок на ферме "Золотая лужа", каждый кусочек навоза становится настоящим шедевром, способствующим производству высококачественных и экологически чистых сельскохозяйственных культур. Ферма "Золотая лужа" известна своим уникальным искусством создания первоклассного навоза!</p>
        </div>
      </div>

    <Footer/>
    </div>
  )
}

export default AboutPage