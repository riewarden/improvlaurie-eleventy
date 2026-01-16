---
title: Trying to decouple myself from proprietary software
date: 2026-01-15
---
A log of my progress moving away from unethical, AI-enforcing tech companies. This is specifically from the POV of an arts freelancer, as I think it is much harder to commit yourself to FOSS when the whole industry runs off 'free' collaborative document packages like GSuite, and everything we do is marketed through social media megacorps. Hopefully this can serve as inspiration for anyone else interested in using more Free Open Source Software.

## Completed
### My Website
BEFORE: Wix. Hated it. Never used it. Was paying stupid money for it.

SOLUTION: I build my website with 11ty. I host it on Github. I serve it with Netlify. Costs me nothing (although I could do without GitHub's data scraping 😐 like that wasn't happening to my Wix site anyway...)
  - *23/01/25* I regard this as completed, because I have no real desire to ever host my domain locally. I have, however, moved the actual design and maintenance of my website from Wix to [11ty](https://www.11ty.dev/), served by [Netlify](https://www.netlify.com/). It's a lot more hassle but I would never go back (at this point) [[whyweb|Read more here.]]. 
  - *15/01/2026* I have now migrated my domain away from GoDaddy, to Namecheap. The only issue I encountered was that for some reason, no matter what I tried (and I tried for hours, over about 3 weeks) I could not log into my Outlook in any other email client, not even with support from NameCheap. This means that I could not migrate my emails over. 
    - I still currently have access to my old emails, but I have to forward them to myself to get access to them. I forwarded myself important bits and bobs like reciepts, but I have occasionally had to ask clients to re-send me important docs that I was too lazy to save as soon as I recieved them. So lesson learned there. I also much more regularly make PDFs of important email trails, so that they can be kept separately.
### Note-taking 
BEFORE: OneNote. Hated it. Could never find stuff.

SOLUTION: I use [Obsidian Notes](https://obsidian.md/). I much prefer it, and I'm now hooked on making all kinds of notes as .md files because they can be turned into so many different things, there are a bunch of other note-taking systems that use .md if I get sick of Obsidian, and the files are much smaller and open more quickly. I love the philosophy of 'linking my thinking'. I don't use the Zettelkasten system perfectly, but my notes have never been easier to sort and find things in.

### Accounting 
BEFORE: A messy spreadsheet in Excel.

SOLUTION: A less messy spreadsheet but in LibreOffice Calc (Calc not necessarily anything to do with it being 'better' it's just a better spreadsheet.)

  - *11/02/25* Manager.io is my choice so far. I like that you can customise the interface to show as many or as few buttons as you need.
  - *15/01/26* Binned off Manager.io and back to a spreadsheet, but this time in LibreOffice Calc. I think I'm just too dumb to understand accounting apps or something. I just don't really understand how people make those apps record the accounting info that they need. I tried another piece of software called Crunch a while ago and had similar problems of 'I just don't get it'.

### Document Editing (non-collaborative)
BEFORE: Microsoft Office pissing me off with typical Microsoft Office bullshit.

AFTER: LibreOffice (which ain't perfect but pisses me off a LOT less).

  - *28/01/25* Wow, I saw that Microsoft is changing peoples' subscriptions so that they are now paying for Copilot and I am noping the fuck out of that. I have redoubled my efforts to get used to [LibreOffice](https://www.libreoffice.org/). I'm not feeling optimistic about table formatting and fonts, but maybe I just need to get used to exporting more stuff as PDFs. I also tried out [Etherpad](https://framapad.org/abc/en/) with a workshop class, and it seemed to work quite well (although doesn't have as many formatting options as Google Docs, which is a shame.)
  - *2/03/25* LibreOffice Writer and Calc seem to be working well so far. I use .md files on Nextcloud for unformatted notes, and anything that I need to read directly off my phone while speaking. One annoying thing about Writer is that Styles seem much more fiddly than they are on Word. But then again, I don't really have to change styles very often, and if I need a really nicely formatted leaflet, I use a graphic design package like Canva, rather than a word processor.
  - *15/01/26* About a year on, I don't miss Microsoft at all. I will use it if an organisation pays for it, but it's completely unnecessary for [[portfolio|my freelance work.]] Unless someone needs to edit a document that I'm sending them, I export everything that I send to people as a PDF to avoid compatibility issues, but even then, I think that's probably a bit unnecessary. I had a go at using Etherpad as a collaborative document platform but it has exactly the same problems editing and viewing on a phone as NextCloud.

### P2P Syncing
BEFORE: Google Photos and WhatsApp Google Backup. Eternally dumping sensitive info on a cloud where it clogs up precious space and needs to sync every 5 seconds, and has a screaming tantrum about how I need to throw money at Google to get more storage space for a service I never asked for.

SOLUTION: Syncthing makes automatic backups of my photos, videos, music, WhatsApp databases, and password manager database from my phone directly to my PC only when I am connected to my home wifi network. 

I use [SyncThing](https://syncthing.net/) for files that are nice to sync between my phone and computer but which I would prefer were not on Cloud storage. This is a bit fiddly to set up, but it works.

### Cloud Storage
BEFORE: OneDrive pissing me off with typical OneDrive bullshit.

SOLUTION: NextCloud, managed by TheGoodCloud.

  - *28/01/25* In the past few months, I've been trying out [NextCloud](https://nextcloud.com/install/), using a free account, provided by [Tab.Digital](https://cloud.tab.digital/). I've been trying to use it more lately but its AutoUpload is a little bit unreliable. Everything syncs, just usually within an hour rather than seconds, which is annoying but not critically damaging. I have pretty much stopped using Google Photo to back up photos from my phone, which feels like a win. I haven't tested how good it is at collaborative editing. I'm sure it could be better if I self-hosted, but I'm not in a position to do that yet. 
  - *11/02/25* So, AutoUpload for photos seems to work pretty consistently for photos now, but refuses to sync backups of some really specific weird files. 
  - *2/03/25* I think I may be stupid. I think NC's auto-upload is just for photos and videos. Trying to set up a SyncThing folder for my Whatsapp databases instead. Also, I am investigating [Hetzner](https://www.hetzner.com/) as a potential host for my cloud. I'm not confident self-hosting, but Hetzner seem like a decent company. I think it would be cool if I was a NC administrator for a group of other people in my area who also want to de-Google, as this would bring down host costs significantly. I'm currently clarifying with Hetzner how their E2EE works, to see if this is viable.
  - *15-01-26* I've now been with TheGoodCloud for nearly a year with almost no issues with regards to storing and editing files on the cloud, and between my phone and two laptops, as an individual. My one major gripe is that when I try to share documents as a link with people, they almost invariably cannot open it on their phone, and cannot edit it. Additionally, while TheGoodCloud provide the best NextCloud service, it's still much more expensive than Microsoft, and they give you less cloud storage. This is fine for me, as 100GB is more than enough for me, as the main mediums I work in are documents and images, but if you work as a video editor or with other kinds of massive files, and you need TBs, I can see a financial barrier here. 
    - People who want to tell me *'er Laurie why don't you just self-host all your crucial files and your work email (where if something went wrong with the domain it would severely damage your business) its like, so easy (if you've spent the last 3 years with a constant interest in sysadmin) and like its soooo cheap because it only costs hundreds of pounds of up-front cash (if you want it to not break down or lose all your data)'* you can fuck right off. People deserve affordable services that manage the bullshit they don't want to have to waste hours troubleshooting. Oh, I broke your kneecaps? Why didn't you just 'spin up' your own self-hosted hospital on a raspberry pi you fucking nerd?

## In Progress
### Operating System
CURRENTLY: Using Windows on my main machine and Linux Mint on my laptop that I take out the house.

GOAL: Run Linux on both machines.

  - *16/01/25* Recently, I bought a refurbished Thinkpad laptop and installed Linux Mint on it, and this has become my portable machine, that has very little content and high security, so that I can feel safe taking it out and about. I bought a Thinkpad as it was reccomended as a model that is very compatible with [Linux Mint](https://www.linuxmint.com/), and so far, it has been great. Most of the work I do currently is through GSuite and occasionally, I use LibreOffice for document editing, and OpenShot for video editing. I sync my notes and to-do list using Obsidian Notes and NextCloud.
    - I should make it clear that I have only started using Linux regularly after phasing out all of the key Microsoft software I used to rely on, and I have a minor technical background where I am comfortable using a command line, and troubleshooting using tech forums. My end goal is to eventually reformat my home machine with Linux, or at the very least, dual boot it with Windows (but I might see how I get on with WINE if the occasion arises). 
    - I had been using Linux Mint for about a year on a different laptop, because it works well on older hardware. My previous laptop was one that I used during my A-Levels, but was rendered 'useless' about 10 years ago when its small hard disk could not download the latest version of Windows at the time, even with a HDD plugged in. I remember that I literally could not use essential functions of the laptop because I needed this update that was impossible for me to download. Last year, I was able to reformat it with Mint XFCE and used that for about a year, but the laptop really does have a stupidly small hard drive (I believe only about 30GB) and a couple of months ago, it finally gave up the ghost and just didn't have enough space for Mint's latest security updates. I'll probably come up with another use for it, maybe as some kind of server, but in this day and age, and the type of work that I do, I needed an upgrade. (and yes, I tried even lighter distros like Puppy, Lubuntu, Bodhi, DSL, and didn't like any of them, or they had incompatible hardware issues)
    - The only major issue I have run into with Linux Mint, is that I have had trouble connecting to my local library's wifi, which is a public sector service provided by the UK Government. UK gov's website (and the library) has instructions for how to connect to on Windows and Mac, but not Linux. Library staff had no idea what was causing the problem (and I didn't expect them to know), but maybe if I booked a session with the library's IT manager, we could figure out what was happening. I can't possibly be the first person who has ever used a Linux machine to try and get on this wifi service.
   
### Collaborative Document Editing
CURRENTLY: GSuite.

GOAL: Hope that NextCloud or LibreOffice gets their act together and make a genuine competitor for GSuite. 

- *16/01/26* Currently, Google Docs is still my tool of choice for collaborative working, as I find NextCloud and Etherpad are not accessible for users outside their respective ecosystems, and are particularly bad on phones. 
-  Also, in my opinion, videocalling on Nextcloud is prohibitively expensive for individuals, and small businesses, and when I tried to get it working on CloudAmo, who claimed it was included in my subscription, I tried about 3 times, and even got support from customer services, and still never got it working correctly (Cloudamo were just crap generally, so I cancelled my subscription with them, and moved to TheGoodCloud, who offer it for small businesses only). 

### Media Center
CURRENTLY: Using Plex on my home computer as a standalone instance.

GOAL: Have Plex be accessible remotely via a NAS.

- *23/01/25* This week, I've started using [Plex](https://www.plex.tv/) to organise films and TV, and I really like it so far. I don't have a way to serve to my phone remotely, but it's just nice to finally be able to organise all my random videos. I have several DVDs of acting masterclasses and recordings of plays, which are a faff to get out during classes to show as examples. This system will hopefully make it much easier to access what I need.
- *2/03/25* Plex works pretty well. I've used it to organise some of my Adventure Time DVDs and I like that it pulls IMDB info into the interface for me.
- *15/01/26* Still happily using Plex. I like that my Plex collection says something about me as an individual. For example, I have a fascination with animated films that feature [[mousemediatimeline|mice as main characters.]] The next step is to set up a home server, and get the files off my laptop and onto a NAS.

### Navigation 
CURRENTLY: Using Google Maps for most things.

GOAL: Use Organic maps and official public transport info for most things.

- *2/03/25* I'm testing out Organic Maps and OSMAnd. OSMAnd has an overwhelming amount of features and I find the interface a bit cluttered, even if you turn a bunch of options off. I think I prefer Organic Maps.
- *16/01/26* Trying to use Organic Maps when I can, but Google Maps undoubtedly has better public transport info, which I need to use a lot.

## Nowhere Near/Aspirations

### Miscellaneous
- **Surveys** 
  - *11/02/25* NextCloud has a utility for this, and there are lots of self-hosted options.
- **Videoconferencing** 
  - *11/02/25* Not obvious what might be the best option, but [Sprout Video](https://sproutvideo.com/pricing) and [NextCloud Talk](https://nextcloud.com/talk/) seem to be the most promising. Particularly as I'm thinking of moving my cloud storage to NextCloud.
  - *2/03/25* NextCloud Talk is looking more and more likely to be the service I eventually go with, as it would be one of several apps integrated with NextCloud.
  - *16/01/26* Never managed to get NextCloud Talk off the ground as an individual, but I've heard it works fine in businesses where everyone has a NextCloud login. It will be interesting to see how this tech develops, given that a couple of governmental departments in Europe have started moving to FOSS large-scale office solutions. Maybe NextCloud will start making it easier to use Talk without having to have an enterprise account.
- **Music Streaming** 
- *11/02/25* Hoping to leave Spotify behind and use Plex or Jellyfin to host music. Also just using offline downloads for my most-listened collections.

### Social Media 
  - *11/02/25* I am trying to spend less time on social media. I have started a Signal group, where I am going to post links to fun stuff happening around my city. 11 people have already joined. I made the group in an attempt to help myself and people like me, to avoid using Facebook as the only way to find out when events are happening. 
    - In the past few days, I have removed Facebook from the main screen of my phone and turned off notifications. I have made a list of websites for small businesses and organisations who host fun indie events, and every day, I check what's coming up in the next few weeks and post it on the Signal group. When I run out of events, I look for local community newspaper websites, and charities, and post some of their links too.
- *15/01/26* I eventually stopped running this newsletter, which is sad, but even just collating all the events became too much work, and I got really overwhelmed in 2025. I would love to start it again, and I wish that more of my circle was on Signal rather than WhatsApp. 
  - I have deleted the Facebook app from my phone, but can still access it with limited functionality through Messenger, which is fine with me.
- **Bluesky vs Mastodon** 
  - *11/02/25* I'm enjoying Bluesky, a lot of the arts industry and my creative community has moved there, and there are good and bad points about the platform, but by God, it's setting a pretty decent example. However, I still find a lot of really good content on Mastodon, particularly for independent journalism, open source/homebrew tech.
  - *15/01/26* Don't use Bluesky a lot now, but seems to have become a passable alternative to x. Mastodon is my favourite platform still, as I feel like I see the most interesting conversations, and often end up clicking links to long reads that challenge me. Unfortunately, it's still absolutely full of pretentious, Linux-using, off-putting cunts like myself.
- **Signal** 
  - *11/02/25* I really want to move to this wholesale, but so many of my communications are currently hooked into the WhatsApp ecosystem. WhatsApp groups are a big way that I find out about upcoming events and jobs. A lot of people I know are reluctant to use another app that appears to work similarly to WhatsApp.
- **Facebook** 
  - *11/02/25* This is such a pain. Facebook is the main way I digitally advertise most of the projects I'm involved with, like Club Wormhole, Trans Voice, Lace Market Theatre, etc.
   - *15/01/26* Fuck Facebook. Still use it every single day.
- **In person meetups** 
  - *15/01/26* I've started arranging shabbat dinners at my house twice a month, to try and see my friends in person more regularly.