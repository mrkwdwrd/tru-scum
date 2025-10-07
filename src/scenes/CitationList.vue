<script setup>
  import Scene  from '@/components/Scene.vue'
  import { onMounted, ref } from 'vue'

  const props = defineProps({
  })

  const list = ref()
  const show = ref(false)

  onMounted(() => {
    let i = 0
    Array.from(list.value.children).forEach(li => li.style.transitionDelay = `${i++ * 150}ms`)
    setTimeout(() => {
      show.value = true
    }, 100)
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="h-screen flex justify-center items-center text-white text-xs font-serif text-justify">
      <ul ref="list" :class="[{ show }, 'columns-4', 'gap-5']">
        <li>
          <a>https://www.apa.org/topics/lgbt/transgender</a>
          <ul>
            <li>American Psychological Association pamphlet on transgender issues</li>
            <li>Affirms psychological consensus - that transgender people are valid, have existed throughout history, are subject to discrimination, and that transness is not a mental disorder.</li>
          </ul>
        </li>
        <li>
          <a>https://www.apa.org/about/policy/resolution-gender-identity.pdf</a>
          <ul>
            <li>A 2008 Gender Identity Resolution by the American Psychological Association which expands upon the premises listed in the annotation above and supports total equality for transgender people - affirmation of the institutional legitimacy of transness in psychology.</li>
          </ul>
        </li>
        <li>
          <a>https://www.apa.org/about/policy/orientation-diversity</a>
          <ul>
            <li>Identical to the above, essentially, except pertaining to trans and gender-nonconforming youth.</li>
          </ul>
        </li>
        <li>
          <a>https://www.apa.org/about/policy/booklet.pdf</a>
          <ul>
            <li>Booklet on LGBTQ issues from the American Psychological Association, outlining their policy and attitudes towards aforementioned communities.</li>
            <li>Expressly positive.</li>
          </ul>
        </li>
        <li>
          <a>https://assets2.hrc.org/files/documents/SupportingCaringforTransChildren.pdf</a>
          <ul>
            <li>Human Rights Campaign document published with the American Academy of Pediatrics & the American College of Osteopathic Pediatricians which affirms the validity of transgender youth, encourages appropriate care and respect for their transness and provides resouces on how to do so.</li>
          </ul>
        </li>
        <li>
          <a>https://www.nhs.uk/conditions/gender-dysphoria/</a>
          <ul>
            <li>The UK’s National Health Service report on gender dysphoria, which affirms the validity of trans people and discusses ways in which gender dysphoria can be alleviated, the best of which is said to often be social and physical transition.</li>
          </ul>
        </li>
        <li>
          <a>http://www.apsa.org/content/2012-position-statement-attempts-change-sexual-orientation-gender-identity-or-gender</a>
          <ul>
            <li>The American Psychoanalytic Association’s statement on gender identity, in which transness is validated, social stigma against transgender people is cited as a serious cause of harm and ‘reparative therapy’ - attempts to suppress one’s transness and force them to live as the gender they were assigned at birth - is medically invalid.</li>
          </ul>
        </li>
        <li>
          <a>https://time.com/5596845/world-health-organization-transgender-identity/</a>
          <ul>
            <li>The World Health Organization recently stopped classifying transness as a mental disorder.</li>
          </ul>
        </li>
        <li>
          <a>https://www.babcp.com/files/About/Press/Memorandum-of-Understanding-on-Conversion-Therapy-in-the-UK.pdf</a>
          <ul>
            <li>Multilateral condemnation of ‘conversion therapy’ from essentially every medical institution in the United Kingdom, with reasons provided.</li>
          </ul>
        </li>
        <li>
          <a>https://www.unfe.org/about/</a>
          <ul>
            <li>Transphobia? The United Nations says no.</li>
          </ul>
        </li>
        <li>
          <a>https://whatweknow.inequality.cornell.edu/topics/lgbt-equality/what-does-the-scholarly-research-say-about-the-well-being-of-transgender-people/</a>
          <ul>
            <li>ENORMOUS meta-meta-analysis on transgender people and the effect gender transition has on their mental health</li>
            <li>Of 56 studies, 52 indicated transitioning has a positive effect on the mental health of transgender people and 4 indicated it had mixed or no results.</li>
            <li>ZERO studies indicated gender transitioning has negative results</li>
          </ul>
        </li>
        <li>
          <a>https://pediatrics.aappublications.org/content/134/4/696</a>
          <ul>
            <li>Longitudinal study on the effectiveness of puberty suppression & sex reassignment surgery on trans individuals in improving mental outcomes</li>
            <li>Unambiguously positive results - results indicate puberty suppression, support of medical professionals & SRS have markedly beneficial outcomes to trans individuals’ mental health and productivity.</li>
          </ul>
        </li>
        <li>
          <a>https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2265.2009.03625.x</a>
          <ul>
            <li>Meta-analysis of studies concerning individuals who underwent sex reassignment surgery</li>
            <li>80% of individuals reported significant improvement in dysphoria</li>
            <li>78% of individuals reported significant improvement in psychological symptoms</li>
            <li>72% of individuals reported significant improvement in sexual function</li>
          </ul>
        </li>
        <li>
          <a>https://www.jaacap.org/article/S0890-8567%2816%2931941-4/fulltext</a>
          <ul>
            <li>Children who socially transition report levels of depression and anxiety which closely match levels reported by cisgender children, indicating social transition massively decreases the risk factor of both.</li>
          </ul>
        </li>
        <li>
          <a>https://www.eurekalert.org/pub_releases/2015-03/tes-sdc030615.php</a>
          <ul>
            <li>Children who socially transition report levels of depression and anxiety which closely match levels reported by cisgender children, indicating social transition massively decreases the risk factor of both.</li>
          </ul>
        </li>
        <li>
          <a>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6223813/</a>
          <ul>
            <li>Longitudinal study which indicates transgender people have a lower quality of life than the general population.</li>
            <li>However, that quality of life raises dramatically with ‘Gender Affirming Treatment’, the nature of which is detailed extensively in-text.</li>
          </ul>
        </li>
        <li>
          <a>https://www.wpath.org/media/cms/Documents/SOC%20v7/Standards%20of%20Care_V7%20Full%20Book_English.pdf</a>
          <ul>
            <li>Extensive and incredibly interesting document on the standards of care for transgender and gender-nonconforming individuals.</li>
            <li>A good read, but won’t win you any arguments.</li>
          </ul>
        </li>
        <li>
          <a>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5357259/</a>
          <ul>
            <li>Meta-analysis covering prior research on trans individuals’ performance in sports and preexisting sports policies concerning trans people</li>
            <li>Findings show there is no consistent or direct research indicating transgender women have an unfair athletic advantage at any stage of their transition. </li>
            <li>Additional findings show most sports policies are not evidence-based and trans individuals experience substantial discrimination from sports institutions.</li>
          </ul>
        </li>
        <li>
          <a>https://www.scientificamerican.com/article/beyond-xx-and-xy-the-extraordinary-complexity-of-sex-determination/</a>
          <ul>
            <li>Scientific American graphic describing the many characteristics which factor into one's sexual identity.</li>
            <li>Helpful in indicating the ambiguous and bimodal nature of sex/responding to people who believes it’s as simple as XX/XY</li>
          </ul>
        </li>
        <li>
          <a>https://www.nytimes.com/2018/10/25/opinion/sex-biology-binary.html?ref=oembed</a>
          <ul>
            <li>NY Times Op-Ed from a professor of biology & gender studies</li>
            <li>Explains the biological complexity of sex and the ways in which the Trump Administration’s attempts to legislate that complexity of of existence is both immoral and unscientific.</li>
          </ul>
        </li>
        <li>
          <a>https://www.researchgate.net/publication/328057475_Untangling_the_Gordian_Knot_of_Human_Sexuality_What_Is_the_Biologic_Basis_of_Variations_in_Sexual_Phenotype</a>
          <ul>
            <li>Description of modern scientific attitudes towards human sex.</li>
            <li>“The view that the world’s population can be separated into a clearly defined dyadic unit of male and female is defunct; not only clinical observations, but molecular biology has established that sexual identity is on a continuum, with an enormous potential for variance”</li>
          </ul>
        </li>
        <li>
          <a>https://assets2.hrc.org/files/assets/resources/2018-YouthReport-NoVid.pdf?_ga=2.134619825.1102244158.1526302453-846000759.1523970534</a>
          <ul>
            <li>2018 LGBTQ Youth Report</li>
            <li>HUGE collection of data concerning difficulties LGBTQ people face</li>
            <li>67% of LGBTQ youth hear their parents make negative statements about LGBTQ people - rises to 78% if child is in closet.</li>
            <li>48% of LGBTQ youth say their family makes them feel bad for their identity</li>
            <li>This pretty much ends the argument right here.</li>
          </ul>
        </li>
        <li>
          <a>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5178031/</a>
          <ul>
            <li>Broad international study of trans suicide rate (it’s quite high).</li>
            <li>“Gender-based victimization, discrimination, bullying, violence, being rejected by the family, friends, and community; harassment by intimate partner, family members, police and public; discrimination and ill treatment at health-care system are the major risk factors that influence the suicidal behavior among transgender persons”.</li>
          </ul>
        </li>
        <li>
          <a>https://williamsinstitute.law.ucla.edu/wp-content/uploads/AFSP-Williams-Suicide-Report-Final.pdf</a>
          <ul>
            <li>Massive demographic analysis which codifies the many social & institutional factors which contribute to trans suicide rates</li>
            <li>Surprise surprise, discrimination & abuse play a huge role. Read the summary.</li>
          </ul>
        </li>
        <li>
          <a>http://transpulseproject.ca/wp-content/uploads/2012/10/Impacts-of-Strong-Parental-Support-for-Trans-Youth-vFINAL.pdf</a>
          <ul>
            <li>Analysis of the ways in which parental support affect elements of disadvantage experienced by transgender youth.</li>
            <li>Most notably, strong parental support decreases the likelihood of a suicide attempt within the past year from 57% to just 4%.</li>
          </ul>
        </li>
        <li>
          <a>https://link.springer.com/article/10.1007%2Fs13178-018-0335-z</a>
          <ul>
            <li>Analysis of crime & privacy violations as they relate to concerns raised by those who advocate for ‘trans bathroom bills’</li>
            <li>Analysis indicates there is no empirical evidence to support these concerns; such crimes & privacy violations are exceptionally rare. Calls for trans bathroom bills are fearmongering, plain and simple.</li>
          </ul>
        </li>
        <li>
          <a>https://mountainscholar.org/bitstream/handle/10217/178827/Matthews_colostate_0053N_13859.pdf?sequence=1&isAllowed=y</a>
          <ul>
            <li>Interesting (and long) qualitative analysis on the depiction of transgender people in Sports Illustrated over past decades.</li>
            <li>Finds disproportionately negative depictions (of course).</li>
            <li>Worth reading; probably not going to win you an argument.</li>
          </ul>
        </li>
        <li>
          <a>https://tgeu.org/wp-content/uploads/2019/05/MapB_TGEU2019.pdf</a>
          <ul>
            <li>16 countries in Europe & Central Asia still require sterilization before transgender peoples’ gender identity can be legally recognized</li>
          </ul>
        </li>
        <li>
          <a>https://www.nbcnews.com/politics/national-security/trump-admin-tells-u-s-embassies-they-can-t-fly-n1015236</a>
          <ul>
            <li>News article - June 2019</li>
            <li>Trump Administration rejecting requests from US embassies to fly the rainbow pride flag on embassies’ main banner during Pride Month</li>
          </ul>
        </li>
        <li>
          <a>https://www.hrc.org/blog/new-report-on-youth-homeless-affirms-that-lgbtq-youth-disproportionately-ex</a>
          <ul>
            <li>LGBTQ youth are 120% (2.2x) as likely to experience homelessness as cisgender and heterosexual youth.</li>
            <li>Up to 40% of the homeless youth population is LGBTQ</li>
            <li>Cited possibility for this discrepancy being LGBTQ youth getting kicked out of the home by unwelcoming/openly hostile family.</li>
          </ul>
        </li>
        <li>
          <a>https://en.wikipedia.org/wiki/LGBT_employment_discrimination_in_the_United_States</a>
          <ul>
            <li>LGBTQ employment discrimination is still far from a settled issue.</li>
            <li>A point of note - in 2017, the Trump Administration used the Department of Justice to revoke an Obama-era Title VII policy which protected transgender employees from discrimination.</li>
          </ul>
        </li>
      </ul>
    </div>
  </Scene>
</template>

<style scoped>
  ul {
    list-style-type: disc;
    padding-left: 2em;
  }
  ul ul {
    list-style-type: circle;
  }
  a {
    text-decoration: underline;
    color: aqua;
    word-break: break-all;
  }
  li {
    opacity: 0;
    transition: opacity 0.15s;
  }
  .show li {
    opacity: 1;
  }
</style>