<script setup>
import Logo from '@/scenes/Logo.vue'
import Livestream from '@/scenes/Livestream.vue'
import LivestreamOff from '@/scenes/LivestreamOff.vue'
import InstagramAccount from '@/scenes/InstagramAccount.vue'
import InstagramPost from '@/scenes/InstagramPost.vue'
import IgComment from '@/components/IgComment.vue'
import InstagramBio from '@/scenes/InstagramBio.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref, watch } from 'vue'
import notesImage from '@/assets/images/instagram/notes.png'
import femboiaesthetic from '@/assets/images/instagram/juniper-femboiaesthetic.jpg'
import Credits from '@/scenes/Credits.vue'
import TwitterStatus from '@/scenes/TwitterStatus.vue'
import GoogleSearch from '@/scenes/GoogleSearch.vue'
import GoogleResults from '@/scenes/GoogleResults.vue'
import GoogleResult from '@/components/GoogleResult.vue'
import AmazonSearch from '@/scenes/AmazonSearch.vue'
import AmazonBook from '@/scenes/AmazonBook.vue'
import YouTubeVideo from '@/scenes/YouTubeVideo.vue'
import PodcastTile from '@/scenes/PodcastTile.vue'
import TweetStorm from '@/scenes/TweetStorm.vue'
import DsmCriteria from '@/scenes/DsmCriteria.vue'
import VennDiagram from '@/scenes/VennDiagram.vue'
import FacebookPage from '@/scenes/FacebookPage.vue'
import DanielDayLewis from '@/components/DanielDayLewis.vue'
import VideoZoomIn from '@/scenes/VideoZoomIn.vue'
import CitationList from '@/scenes/CitationList.vue'
import CatsMovie from '@/components/CatsMovie.vue'
import parents from '@/assets/images/instagram/greg-baby.jpg'
import housemate from '@/assets/images/instagram/greg-housemate.jpg'
import tpusa from '@/assets/images/tpusa.png'
import restoredhope from '@/assets/images/restoredhope.png'
import billygraham from '@/assets/images/billygraham.png'
import liberty from '@/assets/images/liberty.png'
import brain from '@/assets/images/brain.png'

import {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section13,
  section14,
  inject1,
  inject2,
  inject3,
  inject4,
  inject5,
  inject6,
  inject7
} from '@/content/comments'

import { tweetStorm, tweet } from '@/content/tweets'
import { videos } from '@/content/videos'
import FacebookSearch from '@/scenes/FacebookSearch.vue'
import FacebookProfile from '@/scenes/FacebookProfile.vue'
import Grid from '@/Grid.vue'

const elem = document.documentElement

const reset = ref(false)

const fullScreen = ref(false)

const showCue = ref(false)

const showGrid = ref(false)

const cue = ref(null)

const viewers = ref(1)

const time = ref(1)

const comments = ref([])

let timerInterval

let viewerInterval

const keyListener = (e) => {
  if (e.code === 'Space') {
    cue.value = cue.value ? Math.min(cue.value + 1, 73) : 1
  }
  if (e.code === 'Backspace') {
    cue.value = cue.value > 1 ? cue.value - 1 : null
  }
  if (e.code === 'KeyG') {
    toggleShowGrid()
  }
  if (e.code === 'KeyQ') {
    toggleShowCue()
  }
  if (e.code === 'KeyF') {
    enterFullScreen()
  }
}

const enterFullScreen = () => {
  document.addEventListener('contextmenu', e => e.preventDefault());
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  }
  fullScreen.value = true
}

const toggleShowCue = () => {
  showCue.value = !showCue.value
}

const toggleShowGrid = () => {
  showGrid.value = !showGrid.value
}

const startTime = () => {
  stopTime()
  time.value = 1
  viewers.value = 1
  calcViewers()
  timerInterval = setInterval(() => {
    time.value++
  }, 1000)
}

const stopTime = () => {
  clearInterval(viewerInterval)
  clearInterval(timerInterval)
}

const getFactor = (val) => {
  if (val < 6000) {
    return randomIntFromInterval(16, 164)
  }
  if (val < 8000) {
    return randomIntFromInterval(4, 87)
  }
  if (val < 9000) {
    return randomIntFromInterval(1, 45)
  }
  return randomIntFromInterval(-4, 14)
}

const calcViewers = () => {
  viewerInterval = setInterval(() => {
    const factor = getFactor(viewers.value)
    const max = randomIntFromInterval(9376, 11022)
    const inc = parseInt(Math.random() * factor)
    viewers.value = Math.max(Math.min(viewers.value + inc, max), 1)
  }, 1000)
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const handleComments = array => {
  comments.value.push(...array)
  comments.value.splice(0, comments.value.length - 10)
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})

watch(cue, val => {
  console.warn('Cue', val, new Date(time.value * 1000).toISOString().slice(11, 19))
  if (val === null) {
    stopTime()
    comments.value = []
    reset.value = true
    setTimeout(() => {
      reset.value = false
    }, 2000)
  }
})
</script>

<template>
  <main class="!cursor-none !select-none">
    <button v-if="!fullScreen"
      @click="enterFullScreen"
      class="absolute text-white top-0 right-0 left-0 bottom-0 cursor-pointer">
      Enter Full Screen
    </button>

    <!-- Logo, Countdown (5 mins?)-->
    <Logo v-if="cue === 1"
      :countdown="300000" />

    <!-- Black  -->

    <!-- Video: Trailer -->
    <Scene v-if="cue === 2"
      class="bg-black max-w-[1980px] mx-auto flex content-center items-center">
      <div class="aspect-video overflow-hidden  border-red-100">
        <video class="w-full" autoplay>
          <source src="/src/assets/videos/intro.mp4" type="video/mp4">
        </video>
      </div>
    </Scene>

    <!-- Livestream -->
    <Livestream v-if="cue === 3"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section1"
      @mount="startTime"
      @comments="val => handleComments(val)" />

    <!-- Livestream - TRIGGERED COMMENTS -->
    <Livestream v-if="cue === 4"
      :viewers="viewers"
      :time="time"
      :comments="section1"
      :injectComments="inject1"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

      <!-- Livestream - Hide comments -->
    <Livestream v-if="cue === 5"
      :viewers="viewers"
      :time="time"
      :comments="section1"
      :existingComments="comments"
      :hideComments="true"
      @comments="val => handleComments(val)" />

    <!-- Google: “real women only vs logic trap”  -->
    <GoogleSearch v-if="cue === 6"
      term="real women only vs logic trap" />

    <!-- Tweet: Amelia -->
    <TwitterStatus v-if="cue === 7"
      :tweet="tweet.amelia" />

    <!-- Tweetstorm: Amelia (1) -->
    <TweetStorm v-if="cue === 8"
      :tweets="tweetStorm.amelia" />

    <!-- Podcast Tile -->
    <PodcastTile v-if="cue === 9" />

    <!-- Livestream -->
    <Livestream v-if="cue === 10"
      :viewers="viewers"
      :time="time"
      :comments="section2"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Amazon search -->
    <AmazonSearch v-if="cue === 11"
      term="amelia collins womb-an" />

    <!-- Amazon book -->
    <AmazonBook v-if="cue === 12" />

    <!-- Tweetstorm: Amelia (2) -->
    <TweetStorm v-if="cue === 13"
      :tweets="tweetStorm.amelia" />

    <!-- Livestream -->
    <Livestream v-if="cue === 14"
      :viewers="viewers"
      :time="time"
      :comments="section3"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Livestream (TERF comments) -->
    <Livestream v-if="cue === 15"
      :viewers="viewers"
      :time="time"
      :comments="section3"
      :injectComments="inject2"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Tweet: JK -->
    <TwitterStatus v-if="cue === 16"
      :tweet="tweet.jk" />

    <!-- Tweetstorm: JK -->
    <TweetStorm v-if="cue === 17"
      :tweets="tweetStorm.jk" />

    <!-- Tweetstorm: Greg & Amelia -->
    <TweetStorm v-if="cue === 18"
      :tweets="tweetStorm.ameliaVsGreg" />

    <!-- Video: Debate (intro) -->
    <YouTubeVideo v-if="cue === 19"
      :video="videos.debateIntro" />

    <!-- Video: Debate (1) -->
    <YouTubeVideo v-if="cue === 20"
      :video="videos.debate1" />

    <!-- Video: Debate (2) -->
    <YouTubeVideo v-if="cue === 21"
      :video="videos.debate2" />

    <!-- Video: Debate (still/zoom) -->
    <VideoZoomIn v-if="cue === 22"
      :video="videos.debateStill" />

    <!-- Livestream -->
    <Livestream v-if="cue === 23"
      :viewers="viewers"
      :time="time"
      :comments="section4"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Venn Diagram -->
    <VennDiagram v-if="cue === 24" />

    <!-- Video: Pink Floyd -->
    <YouTubeVideo v-if="cue === 25"
      :video="videos.pinkFloyd" />

    <!-- Livestream -->
    <Livestream v-if="cue === 26"
      :viewers="viewers"
      :time="time"
      :comments="section5"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Google: “dsm criteria”  -->
    <GoogleSearch v-if="cue === 27"
      term="gender dysphoria dsm-5 criteria" />

    <DsmCriteria v-if="cue === 28" />

    <!-- IG: Greg photo (housemate) -->
    <InstagramPost v-if="cue === 29"
      user="greg"
      :own="true"
      :image="housemate"
      :age="[ 11, 'weeks' ]"
      :likes="42"
      caption="Simon. Best housemate, best mate.">
      <IgComment user="KawaiiKingX" image="KawaiiKingX" :age="`${11} weeks`" :likes="6" :replies="2" :stories="true" comment="❤️❤️❤️" />
    </InstagramPost>

    <!-- Google: 'Daniel' -->
    <GoogleSearch v-if="cue === 30"
      term="daniel"
      :suggestions="[
        'Daniel Radcliffe',
        'Daniel Radcliffe Harry Potter',
        'How Tall is Daniel Radcliffe',
        'Daniel Radcliffe Equus Naked'
      ]" />
    <!-- (Daniel Radcliffe, Daniel Radcliffe Harry Potter, how tall is Daniel Radcliffe, Daniel Radcliffe Equis naked) -->

    <!-- Google: 'Actors name Daniel' -->
    <GoogleSearch v-if="cue === 31"
      term="actors named daniel"
      :suggestions="[
        'Daniel Day-Lewis',
        'Daniel Radcliffe',
        'Daniel Craig',
        'Daniel Kaluuya',
        'Dan Akroyd'
      ]"
      />
    <!-- Daniel day Lewis - click on name - show search page of him / his face  -->
    <GoogleResults v-if="cue === 32"
      term="Daniel Day-Lewis">
      <DanielDayLewis />
    </GoogleResults>

    <!-- IG: Juniper photo (cat ears? dress?) -->
    <InstagramPost v-if="cue === 33"
      user="juniper"
      :image="femboiaesthetic"
      :age="[ 8, 'days' ]"
      :likes="72"
      caption="Getting kinda into this femboi astheic ngl 🐱🐾💙✨">
      <IgComment user="RainbowsAndRizz" image="RainbowsAndRizz" :age="`${18} days`" :likes="16" :replies="2" :stories="true" comment="Trans rights are catboi rights!!!" />
      <IgComment user="M4sc+M4gic" image="M4sc+M4gic" :age="`${18} days`" :likes="2" :replies="0" :stories="false" comment="How does it feeling knowing that mentally ill degenerates like you are destroying our community? Our struggle isn’t yours to claim. Get some therapy and grow up, little girl." />
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${18} days`" :likes="1" :replies="0" :stories="true" comment="Beautiful!!! " />
      <IgComment user="blep." image="troll" :age="`${18} days`" :likes="1" :stories="false" comment="You’ll never be a real man" />
      <IgComment user="reese74" image="anon" :age="`${18} days`" :likes="1" :stories="false" comment="Ewwww 🤮 gen z is cooked" />
    </InstagramPost>

    <!-- IG: Juniper bio -->
    <InstagramBio v-if="cue === 34"
      user="juniper"
    />

    <!-- Livestream -->
    <Livestream v-if="cue === 35"
      :viewers="viewers"
      :time="time"
      :comments="section6"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Google doc of links  -->
    <CitationList v-if="cue === 36" />

    <!-- picture of brains on screen -->
    <Scene v-if="cue === 37"
      class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full relative">
        <main class="w-full flex items-center ">
          <div class="w-full max-w-screen-lg mx-auto flex flex-col justify-center" >
            <img :src="brain" />
          </div>
        </main>
      </div>
    </Scene>

    <!-- Video: Debate (3) -->
    <YouTubeVideo v-if="cue === 38"
    :video="videos.debate3" />

    <!-- Black -->
    <Scene v-if="cue === 39" />

    <!-- Facebook: Search 'Amelia collins' -->
    <FacebookSearch v-if="cue === 40"
      term="amelia collins" />

    <!-- Facebook: Amelia -->
    <FacebookProfile v-if="cue === 41" />

    <!-- Facebook: Primary school education - to st Mary’s fb page -->
    <FacebookPage v-if="cue === 42" />

    <!-- Livestream -->
    <Livestream v-if="cue === 43"
      :viewers="viewers"
      :time="time"
      :comments="section7"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Comment - Why d’you bother with the people on our side, Greg? Keep dunking on the leftist snowflakes -->
    <Livestream v-if="cue === 44"
      :viewers="viewers"
      :time="time"
      :comments="section7"
      :existingComments="comments"
      :injectComments="inject3"
      @comments="val => handleComments(val)" />

    <!-- Video: Pimple popping -->
    <YouTubeVideo v-if="cue === 45"
      :video="videos.pimplePopping" />

    <!-- Livestream -->
    <Livestream v-if="cue === 46"
      :viewers="viewers"
      :time="time"
      :comments="section7"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- ("Calm down Greg” “LOL triggered!”) -->
    <Livestream v-if="cue === 47"
      :viewers="viewers"
      :time="time"
      :comments="section8"
      :injectComments="inject4"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Video: Debate (4) -->
    <YouTubeVideo v-if="cue === 48"
      :video="videos.debate4" />

    <!-- Video: Debate (5) -->
    <YouTubeVideo v-if="cue === 49"
      :video="videos.debate5" />

    <!-- Livestream -->
    <Livestream v-if="cue === 50"
      :viewers="viewers"
      :time="time"
      :comments="section9"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- (Juniper comments on live - what happened to juniper? Omg Greg check their insta now! Etc ) -->
    <Livestream v-if="cue === 51"
      :viewers="viewers"
      :time="time"
      :comments="section9"
      :injectComments="inject5"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- IG: Juniper photo (note) -->
    <InstagramPost v-if="cue === 52"
      user="juniper"
      :image="notesImage"
      :age="[ 4, 'minutes' ]"
      :likes="49">
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${4} minutes`" :likes="2" :stories="true" comment="I cannot imagine what you must be going through right now, Robin. Sending love, hugs, prayers…everything. 🫂♥️" />
      <IgComment user="TheyShineBright 🌈🌈🌈" image="TheyShineBright" :age="`${3} minutes`" :likes="2" :replies="1" :stories="true" comment="I’m crying…Juni was such a beacon of hope and positivity for me as a closeted enby I can’t even imagine…rest in peace, I’m sure they’re in a better and happier place now 🥺" />
      <IgComment user="NekoVibes" image="NekoVibes" :age="`${2} minutes`" :likes="18" :replies="6" :stories="true" comment="Greg needs to delete his channel. I wouldn’t even believe it if he apologised at this point. He’s an absolute cancer to our community. More people need to see what happens when unhinged narcissistic trolls like him get a platform. They’re the ones who ACTUALLY make us look bad. Take a long hard look at yourself and log off. #ByeGreg" />
      <IgComment user="ChillWithWill" image="ChillWithWill" age="Just now" :likes="4" :replies="2" :stories="false" comment="How can people be so cruel? If someone as sweet and full of life as Juni couldn’t make it through, what hope is there for the rest of us? I know we’ve gotta stay strong and keep on fighting as a community, but it’s so hard sometimes…rest in peace and power. You’ll never be forgotten, and your bullies will never be forgiven. 🏳️‍⚧️✊" />
    </InstagramPost>

    <!-- Livestream -->
    <Livestream v-if="cue === 53"
      :viewers="viewers"
      :time="time"
      :comments="section10"
      :existingComments="comments"
      :hideComments="true"
      @comments="val => handleComments(val)" />

    <!-- Livestream: Show commments -->
    <Livestream v-if="cue === 54"
      :viewers="viewers"
      :time="time"
      :comments="section10"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Livestream: EvYves comment -->
    <Livestream v-if="cue === 55"
      :viewers="viewers"
      :time="time"
      :injectComments="inject6"
      :comments="section11"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- IG: Greg photo (housemate) -->
    <InstagramPost v-if="cue === 56"
      user="greg"
      :own="true"
      :image="housemate"
      :age="[ 11, 'weeks' ]"
      :likes="42"
      caption="Simon. Best housemate, best mate.">
      <IgComment user="KawaiiKingX" image="KawaiiKingX" :age="`${11} weeks`" :likes="6" :replies="2" :stories="true" comment="❤️❤️❤️" />
    </InstagramPost>

    <!-- IG: Greg photo (parents) -->
    <InstagramPost v-if="cue === 57"
      user="greg"
      :image="parents"
      :age="[ 58, 'weeks' ]"
      :likes="18">
      <IgComment user="Meowster" image="Meowster" :age="`${57} weeks`" :likes="0" :replies="0" comment="So cute! What happened Greggles??! 😜"/>
    </InstagramPost>

    <!-- Livestream -->
    <Livestream v-if="cue === 58"
      :viewers="viewers"
      :time="time"
      :comments="section12"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Google: 'trans conversation therapy' -->
    <GoogleSearch v-if="cue === 59"
      term="trans conversion therapy that works" />

    <!-- Google: Results - churches in America -->
    <GoogleResults v-if="cue === 60"
      term="trans conversion therapy">
      <div class="flex flex-col gap-12">
        <GoogleResult
          :image="tpusa"
          site="tpusafaith.com"
          url="https://tpusafaith.com"
          title="America Needs A Strong Church"
          content="TPUSA Faith is dedicated to empowering Christians to put their faith into action. We engage, equip, and empower millions of grateful Americans." />
        <GoogleResult
          :image="restoredhope"
          site="Restored Hope Network"
          url="https://www.restoredhopenetwork.org › Transgender Resources"
          title="Transgender Resources"
          content="A one-page document with links that shares essential facts related to transgender medicine, what has been called gender affirming care by US Medical groups." />
        <GoogleResult
          :image="liberty"
          site="Liberty University"
          url="https://www.liberty.edu › about"
          title="Liberty University: A Christian University in Virginia and Online"
          content="Liberty University is an accredited evangelical liberal arts institution with 15 colleges and schools, including a law school, medical school, and school of ..." />
        <GoogleResult
          :image="billygraham"
          site="Billy Graham Evangelistic Association"
          url="https://billygraham.org"
          title="Billy Graham Evangelistic Association"
          content="BGEA, founded by Billy Graham, is a Christian non-profit dedicated to sharing the Gospel of Jesus Christ and empowering others to do the same." />
      </div>
    </GoogleResults>

    <!-- Livestream -->
    <Livestream v-if="cue === 61"
      :viewers="viewers"
      :time="time"
      :comments="section13"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Google: 'cats the musical' -->
    <GoogleSearch v-if="cue === 62"
      term="cats the musical" />

    <!-- 2019 cats film page -->
    <YouTubeVideo v-if="cue === 63"
      :video="videos.catsMovie" />

    <!-- Google: 'cats the musical original' -->
    <GoogleSearch v-if="cue === 64"
      term="cats the musical original" />

    <!-- Video: Jellical cats ball -->
    <YouTubeVideo v-if="cue === 65"
      :video="videos.cats" />

    <!-- Livestream -->
    <Livestream v-if="cue === 66"
      :viewers="viewers"
      :time="time"
      :comments="section13"
      :existingComments="comments"
      :hideComments="true"
      @comments="val => handleComments(val)" />

    <!-- IG: Greg  -->
    <InstagramAccount v-if="cue === 67"
      user="greg"
      :own="true"
    />

    <!-- IG: EvYves  -->
    <InstagramAccount v-if="cue === 68"
      user="evyves"
    />

    <!-- Livestream -->
    <Livestream v-if="cue === 69"
      :viewers="viewers"
      :time="time"
      :comments="section14"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Comments then triggered saying Evyves has left the live -->
    <Livestream v-if="cue === 70"
      :viewers="viewers"
      :time="time"
      :injectComments="inject7"
      :comments="section14"
      :existingComments="comments"
      @comments="val => handleComments(val)" />

    <!-- Livestream: Ended (?) -->
    <LivestreamOff v-if="cue === 71"
      :viewers="viewers"
      :time="time"
      @mount="stopTime" />

    <!-- Black -->
    <Scene v-if="cue === 72" />

    <!-- Credits -->
    <Credits v-if="cue === 73" />

    <Grid v-if="showGrid" />
    <div v-if="showCue" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-neutral-200 font-extrabold">Cue {{ cue }}</div>
    <div v-if="reset" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-green-600 font-extrabold">RESET!</div>

  </main>
</template>

<style lang="css" scoped>
  main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
</style>
