// var tabContainer = $("#tab-container")
// // var triangle = $("#triangle")

var mobileContainer= $(".mobile-content-container")


var tabs = [
      {
        title: "Spam",
        info:`Crisis pregnancy centers pose as abortion clinics online but do not actually provide abortions or abortion referrals. If they refuse to be transparent on their website, we will be transparent in their reviews.<br> <small class="update">7/7 UPDATE: Yelp has temporarily disabled the review feature for Crisis Pregnancy Centers. While we work to combat this, please look at our other action items.</small>`,
        cta:`Spam Crisis Pregnancy Centers with honest reviews. <ol> <li> <h5 class="card-title">Launch our anti-CPC code</h5> <p class="card-text">This code within this script will allow you to easily send applications to CPC's. All you have to do is open the link, click <code>Runtime</code>, and select <code>Run All</code>. If you're on mobile, you need to click the three lines on the top left to see these option. <strong>You must have a Google account* for this program to work.</strong> <small>*if you get the error "No backends available", try logging in with a different Google account<small><br><a  class="btn" href="https://colab.research.google.com/drive/1aaXiP-RumYkt_I1rch_7vaf8pBHj3YrK" target="_">Run The Code</a></li> <li> <h5 class="card-title">Keep it running</h5> <p class="card-text">It's really as simple as that! You can keep the program running in your browser while you do something else—it'll send a review about once every 20 seconds. So you know... cook something, touch grass, spend time with loved ones. On your phone, you have to keep the app; on your computer, you can just keep the tab open and go on with your day. Thanks!</p> </li> <li> <h5 class="card-title">Stay updated with future opportunities</h5> <p class="card-text">Join our mailing list—more anti-abortion tiplines are likely to pop up in the coming months and we'll need your help to render them useless.</p> <!-- Begin Mailchimp Signup Form --><style type="text/css"> /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */</style><div id="mc_embed_signup"><form action="https://genzforchange.us20.list-manage.com/subscribe/post?u=4cf3bdffbb8ec2dcc6d7f1ee2&amp;id=bfd737b285" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> <div id="mc_embed_signup_scroll"><div class="mc-field-group"> <input type="email" value="" name="EMAIL" placeholder="Email Address*" class="required email" id="mce-EMAIL"></div> <div id="mce-responses" class="clear"> <div class="response" id="mce-error-response" style="display:none"></div> <div class="response" id="mce-success-response" style="display:none"></div> </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4cf3bdffbb8ec2dcc6d7f1ee2_bfd737b285" tabindex="-1" value=""></div> <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div></form></div><script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='FNAME';ftypes[2]='text';fnames[1]='MMERGE1';ftypes[1]='text';fnames[3]='MMERGE3';ftypes[3]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script><!--End mc_embed_signup--> </li> </ol>`
      },
      {
        title: "Assist",
        info:"There are many ways to help those providing and seeking abortions. One of most direct forms of action that can be taken right now is to volunteer your time, resources, and information towards a range of local and national abortion initiatives.",
        cta:`Assist abortion seekers by volunteering your time, resources, and/or expertise. <ul> <li> <h5>Online Abortion Resource Squad</h5> <p>This organization is seeking volunteers to respond to the “r/Abortions” forum on Reddit. After conducting a brief training, individuals will be tasked with responding to inquiries on the page, ranging from legislative questions to general support.</p> <a class="btn" href="https://abortionsquad.org" target="_">Sign Up</a> </li> <li> <h5>Planned Parenthood</h5> <p>Planned Parenthood chapters across the country are leading digital roundtables to strategize and discuss local impacts of the overturning of Roe. Sign up to hear from organizers and methods to support.</p> <a class="btn" target="_" href="https://www.weareplannedparenthood.org/pGPUfPzxL0-W-oG8DCQ24w2?ms=3NALz2111W1N1V&sourceid=1010711&_gl=1*108czza*_gcl_aw*R0NMLjE2NDEyNTAyMzQuQ2owS0NRaUEyc3FPQmhDR0FSSXNBUHVQSzBqX2ljNG5STlRWYVN3Y2tDa2pDaXdyaTRvODlZa2VNUU1CalM4SGppQkMzZmxwUVhTa19jTWFBaFJuRUFMd193Y0I.&_ga=2.174691170.1913471238.1657031785-381190676.1656261991">Stay Up To Date</a> </li> <li> <h5>Points with Purpose</h5> <p>This project connects individuals holding high quantities of hotel or airline miles to organizations that assist in providing abortions. This is a tangible way for people to help online, other than direct monetary contributions.</p> <a class="btn" href="https://pointswithpurpose.org/" target="_">Pledge Your Points</a> </li> <li> <h5>Lend your address to a friend (*and only to a friend- not strangers on the internet)</h5> <p>In certain states, telemedicine providers are barred or face restrictions with providing abortion medications to those seeking reprodutive healthcare. Thus, allies in states where abortion isn’t regulated are implored to provide their address to friends in red areas so that they can receive these pills and forward them in discreet packaging.</p> </li> <li> <h5>Call your local abortion clinic</h5> <p>Following Roe v. Wade being overturned, abortion clinics and funds across the country are overwhelmed. Take the effort to reach out to them via social media or a phone call, to ask how you can be assisting them in this busy time period. </p> <a class="btn" href="https://prochoice.org/patients/find-a-provider/" target="_">Find Your Local Clinic</a></li> </ul>`
      },
      {
        title: "Fund",
        info:"People in states where abortion is banned will have to travel hundreds of miles to receive abortion care. Abortion funds pay for abortion care and travel for these individuals, and Gen-Z for Change has started a fund that will distribute donations across several funds throughout the country. ",
        cta:`Fund abortion by donating to abortion funds.<br><a class="btn" href="https://secure.actblue.com/donate/genzforchoice" target="_">Donate to the Gen-Z for Choice Fund</a>`
      },
      {
        title: "Educate",
        info:"People need to know what the laws are in their states and how they can easily access abortion. We have compiled everything folks need to know when seeking this reproductive care.",
        cta:`Educate your community about abortion access and self-managed abortions with the following graphics.<br>Learn About...<br><div class="wrap-collabsible"> <input id="collapsible" class="toggle" type="checkbox"> <label for="collapsible" class="lbl-toggle">Telemedicine Orgs</label> <div class="collapsible-content"> <div class="content-inner"> <p> Abortion clinics in legal states will be overrun with patients from abortion ban states. Wait times might be weeks long. Telemedicine allows you to do an online consultation instantly and receive abortion medication through the mail so you don’t have to wait for a clinic. <br><br> <h6>Carafem</h6> <ul> <li>They serve people in CO, CT, DC, DE, GA, IL, MA, MD, NJ, NM, NV, RI, VA, & VT</li> <li>Will see minors in states without parental involvement laws</li> </ul> <h6>Just The Pill </h6> <ul> <li>They serve me people in MN, MT, WY</li> <li>Will see minors in states without parental involvement laws</li> </ul> <h6>Abortion on Demand</h6> <ul> <li>They serve people in CA, CO, CT, DE, GA, HI, IL, ME, MD, MA, MN, MT, NV, NH, NJ, NM, NY, OR, RI, VY, VA, WA (*Patients in D.C. must provide a Maryland or Virginia mailing address.)</li> <li>Will not see minors</li> </ul> <h6>Hey Jane</h6> <ul> <li>They serve people in CA, CO, IL, NM, NY, WA</li> <li>Will not see minors</li> </ul> <h6>My Choix</h6> <ul> <li>They serve people CA, IL, CO</li> <li>Will see minors in states without parental involvement laws </li> </ul> <h6>Whole Woman’s Health</h6> <ul> <li>They serve people in NM </li> <li>Will not see minors</li> </ul> <h6>Forward Midwifery</h6> <ul> <li>They serve people in CA, CO, MA, NM, OR, and DC</li> <li>Will see minors in states without parental involvement laws</li> </ul> </p> </div> </div> </div><div class="wrap-collabsible"> <input id="collapsible2" class="toggle" type="checkbox"> <label for="collapsible2" class="lbl-toggle">Abortion Hotlines</label> <div class="collapsible-content"> <div class="content-inner"> <p> <h6>Repro Legal Helpline</h6> <ul> <li>Provides personalized, confidential legal-advice available to anyone regardless of age, immigration status, and insurance for self-managed abortions including: seeking medical care, medical privacy, and what to do if you encounter the police. Also provides personalized information on how to obtain a judicial bypass; which allows people under 18 to have an abortion without permission or disclosing it to a parent.</li> <li>Contact by phone at 844-868-2812 or by form <a href="https://www.reprolegalhelpline.org/sma-contact-the-helpline/#secure-form" target="_">here.</a> Messages are checked Monday — Friday from 9am — 8pm ET and you will receive a response within 2 business days.</li> </ul> <h6>I Need An A</h6> <ul> <li>Online service that helps you navigate your abortion options, even in states with abortion bans. By providing your zip code, age, and the last time you had your period, the website lists clinics and/or telehealth services that can aid you. The website also answers questions about legality, cost, and the procedure itself.</li> <li>Visit online at any time at <a href="ineedana.com">ineedana.com</a>. <i>Be sure to use an incognito / private browsing window when accessing this website.</i> </li> </ul> <h6>NAF Hotline (National Abortion Federation)</h6> <ul> <li>Provides callers with information, consultations, and referrals to abortion care. Also provides case management services and limited financial assistance towards accessing an abortion and the associated travel costs.</li> <li>Contact by phone at 1-800-772-9100. Operating hours are Monday — Friday from 8 am — 7 pm EST and Saturday — Sunday from 8 am — 4 pm EST; you will receive a response within minutes.</li> </ul> </p> </div> </div> </div> <div class="wrap-collabsible"> <input id="collapsible3" class="toggle" type="checkbox"> <label for="collapsible3" class="lbl-toggle">Self-Managed Abortion + Plan C</label> <div class="collapsible-content"> <div class="content-inner"> <p> For questions about legal rights and Self-managed abortion contact <a href="https://www.reprolegalhelpline.org/sma-contact-the-helpline" target="_">this helpline</a>. <br><br> <h6>Self managed abortions (SMAs) are a way to safely terminate your pregnancy within the first 70 days (or first 10 weeks) of pregnancy. SMAs are done via pills that include the two drugs Mifepristone and Misoprostol; however, some SMAs are just Misoprostol. These pills have been FDA approved since 2000 and are widely used with around half of of abortions at 8 weeks or less being preformed via these pills. <i>“Abortion pills block pregnancy hormones (mifepristone) and cause cramping and bleeding (misoprostol). This causes the pregnancy to end and come out of the body. It is like a miscarriage”</i> (<a href="http://plancpills.org/" target="_">Plan C</a>)</h6><br><br> <h6>Quick Facts About Misoprostol + Mifepristone:</h6> <ul> <li>95-98% success rate</li> <li>Mifepristone is taken first, followed by misoprostol pills 24 to 48 hours later.</li> </ul> <h6>Misoprostol Only:</h6> <ul> <li>85% success rate</li> </ul> <h6>Both methods:</h6> <ul> <li><i>“Using abortion pills does not require the presence of a doctor. Some people find and take the medications on their own. This is called self-managed abortion.”</i>(<a href="http://plancpills.org/" target="_">Plan C</a>).</li> <li>You can get them prescribed or find/use them un-prescribed. Pills cost from $40-600, though Online pharmacies and new telehealth abortion services charge $150 +. In-clinic is on average $600. </li> </ul> <br> Learn more about SMAs <a href="https://www.plancpills.org/guide-how-to-get-abortion-pills#faq-overview" target="_">here</a>. </p> </div> </div> </div>`
      },
      {
        title: "Register",
        info:`We understand the voter apathy amongst young people following the overturning of Roe v. Wade. However, if voting didn't matter, people in power wouldn't work tirelessly to suppress our votes. In recent years, more than 400 voter suppression bills have been introduced in 48 states, which disproportionately impacts Black, brown, Indigenous, and working class voters—the same groups most affected by the overturning of Roe v. Wade).`,
        cta:`<a href="register.html" class="btn">Register To Vote</a> and tell your friends to do the same.`
      }
]

 tabs.forEach((letter, index) => {
   mobileContainer.append(` <div id="content-mobile">
        <h1 class="title">${tabs[index].title}</h1>
          <p class="info">${tabs[index].info}</p>
          <section>
            <h4>Call to Action</h4>
            <p class="cta">${tabs[index].cta}</p>
          </section>
        </div>`)
 })


function tabSwitch(tab){
  var tabVal = tab-1
      $(".title").empty()
      $(".title").append(`${tabs[tabVal].title}`)
      $(".info").empty()
      $(".info").append(`${tabs[tabVal].info}`)
      $(".cta").empty()
      $(".cta").append(`${tabs[tabVal].cta}`)

}

function expandCta(ctaCard){
  
  var ctaClasses = ctaCard.classList
  var ctaPar = ctaCard.getElementsByClassName("cta-list-option-par")
      // ctaParClasses = ctaPar.classList

  console.log(ctaPar)

  if (ctaClasses.contains("open")) {
      ctaClasses.remove("open")
      ctaPar.removeClass("show-hide-par")
    
  } 
  else {
      ctaClasses.add("open")
      ctaPar.addClass("show-hide-par")

  }
}



$(document).ready(function() {
    var tabVal = 0
      $(".title").empty()
      $(".title").append(`${tabs[tabVal].title}`)
      $(".info").empty()
      $(".info").append(`${tabs[tabVal].info}`)
      $(".cta").empty()
      $(".cta").append(`${tabs[tabVal].cta}`)
});
