所有回答基本都是star format. 每个问题都要答到点子上，一到两个leadership principle 就够了。建议写一个自己的版本，根据自己的真实经历稍微改一下套用到14个里面去，我大概准备了10个故事，每一个故事都写下来。下面是我回答问题的套路，哪些有用，你就用哪个。红色标记的被问到的概率很大，其他的会被问到的多看看面经，练练自己的故事是否能回答哪些。附件里有最近的bq题。

1. introduce yourself 
I am a front end developer from Australia. Back home, I have more then 6 years of experience in both startups and organiztions.
During the past 6 years, I have gained sound knowledge and skills to build functional, responsive UI as well as how to work with 
the team to produce strong, competitive products. I like javascript and believe it has an even brighter future giving the browser's growing power of being a oprational system. 

2. Tell me a time when you disagree with your manager/teammate 

I once worked on a project which is to do a UI re-vamp with additional featurew to a dashboard for users to organize their wedding plannings. It was quite an interactive page that involves lots of state update and re-rendering. Unfortunately the code base I was asked to build on was very legacied. It was a meling pot with Angular, jQuery and UI frameworks such bootstrap, bootstrap angular, along with outdated tools and libraries. Once I did the initial estimate, I decided to introduce React and for a try and see if we can gradually clean up the code debt have a nice clean code base for the future. Initially there was as strong push back from my manager, apperently adding one more framework did not sound like a good solution for a problem caused by incompatibility from having too many frameworks. I agree with him on that point, and he is right, if we were about to use react for the sake of using it. It is quite a common challenge for a lot of startups that in order to move fast they have to keep building things on a code base that is heavily taxed by their tech debt until they can't anymore. To me we were at that point. First of all,the project by nature is a combination of a few planning tools that share some common state. That is like text book of a react prject. But most importantly, if we continue on trying to make the legacy code base work, it would definitely take much longer to build since it was not testiable and extremely error pronem, let along we have more features to be added on to the dashboard on road map. After an brief discussion, with my manager and team, I realized simply laying out the bullet points was not enough to convince a team of 
hard core backend devs. So I decided to let the facts talk for themselves. I organized a bake off between the two approaches by building a small required feature, which is an image uploader with react, and what would with our current code base. And it was an obvious win for using react. After that, I futher convinced them that since react has a large community and endorsed by facebook, it is also beneficial for our hiring process. We took a vote, altho not everyone was on board straight, as I continued leading the project, I also organized tech huddels to share my own learnings on react how we implemented it in practice, eventually the team are pretty happy about it. I remember after we finished, our dev manager looked into the code base, and he told me he was impressed how easy it is when he tried to make a small change and it did not take him ages. After this project, the team and myself has gained more knowledge about react and modern javascript framework in general. Also, personally, i feel like I earned the trust from the team. Not saying that the trust did not exist, but being the least experienced and only front end dev in the team, my voice was not considered as the most important one. 

3. Tell me a time when you received a negative feedback.
先介绍背景,别人对你哪里不满意了，简单说以下就行，不要说很多别人如何对你不满，也不要sug·ar·coat 说自己其实没错。重点放在自己怎么解决这个问题，以及学到了什么。结果一定是好结果

I once contracted with a company. The company has their own content management system, and the front end developing tools were baked in the system. There was no IDE just code css and html is a almost plain text tool, and it has be to done within the system in the office, so learning the system is source in terms of where I spent my time on.  So I asked other the devs who are from the company how they cope with that. And they said it took some time to get use to, and it is no longer bothering them once they got use to it. I mean you can argue the pros and cons of using a plain text tool for programming, but the real problem for me was not having any source control and having to build the entire system to test one line of css. but it did have a negtive impact on my productivity. My first month feedback was not respecting the deadline enough. So I explained the situation, and the manager suggested I could stay late in the office to finish my work. To be honest that was not the response I expected, but I did own that project as a contractor so I worked through almost all weekends during that three months and started early in the office since long hour train ride and staying late didnt seem to be a safe option. 
We did finish the project on time, I managed to find another permanent position before the contract finished, so did not continue with them. Now looking back, the thing that I did well in terms of handling negtive feedback was I took ownership of the project remained profesional at work the entire time. The lesson learnt was raised the any issue soon as possible instead of waiting for it to be big enought to affect productivity.


4. Tell me a time when you came up with a simple solution to solve a problem
One time I was asked to fix the performance of a carousel to show some ads, the existing images are quite high rez and after  5 or 6 pages, the animation started laggin. we could adjust the cache, but the since it is someting we wrote it ourselves long time ago, and this carousel was going to be re-vamped soon. So I looked up some stats, it turned out the carousel almost nevet been browsed over three pages, and it is not worth the effort to resolve something has almost no impact on real users especially giving the fact it is going to be rebuild soon. I think sometimes as devs we tend to pay more attention on tech and implementation rather than taking a step back and think about how our time and effort and better serve the business goal. In my case, the problem was solved in a with some priority adjustment, but at the time, backing by the stats, not spending anytime on changing the cache was a simple and time saving solution.



5. Tell me your most challenging project/ a time you solved a complex problem
When I was at easy weddings, I built a CRM for our wedding supplier by myself. It was hard and challenging during, since it involves a lot of bussiness domain knowledge, which required intensive cross department colabration. But for me, the real challendge comes after we launched. Since it was not a big company and we did not have a full team at the time, I was also in charge of post launch support. Initially, customer service would just forward any issue they encountered directly to me and I would fix them up. But after a while, I started feeling a bit lost as altho I was fixing the bugs all the time but still not havign a clue in terms of improvement. So I decided to change it up. I organized a meeting with the customer service team, asked their feedback and how they and the customers feel about the CRM. Then I proposed instead of directly forwarding everything to me when they happen, are they comfortable writting the bugs or suggestions into a spread sheet that I provide. The fields of the spread sheet include module since 12 modules in the CRM, urgency, bug/suggestion, description. It turened out it was a really helpful, we used the spread sheet along with google SEO tool, we started to see patterns, where the users spend most of their time on, which section has more bug report, what suggestions they provide. There are some really interesting suprises, for example, we had lots of complaints on the images they uploaded got cut off when they show up on our website, which is because we have certain box models for our supplier listings. But the the reasoon being is altho we provided the optimal image dimensions on the page, but it did not help the users as much as we thought. Instead, we implemented a cropping window, which enforced the ratio on the images they upload. you can scale the window, but cannot change the dimention. Now that looking back, I quite enjoyed the entire process. getting feedback and make target improvement, putting our customer first, addressing their concerns. It is very rewarding knowing that you are helping people.


6. Tell me a time when you missed deadline 
先介绍背景 解释为何会miss 你是怎么把损失降到最低的，最后结果是好的，影响不是很大
When we trying the build the wedding dashboard, it was the first time the team uses react + redux. There was a lot of discussions about how to structure our redux state. There was even a few time do overs. For example I suggested we use object and key value pair to store supplier list since less time complexity lookups, but it is not worth it since they already used array, whether we calculate the wedding planning process on the front end and send the result or we do the calculation on the backend and update the front end state from request. So we missed our first deadline of this project, which was quite a toll on us, especilly me, cause this whole using react is quick and easy was my idea and i was leading the project. But after we have the state data structure worked out, later on during the project, we were moving faster and faster as we took time and set up a solid foundation not only on the data strucutre, but also the knowledge and mentality we built for using react and modern javasript framework. Those early discussions seemed endless and even got the product manager asked us when we plan on actually starting building it. I am just glad we took the time for the basics. But also learnt to allocate our time better and give more realistic time estimate, so the business also aware of the progress without worring about the timeline.

7. Biggest mistake or failure



8. Tell me a time when you took on something significant outside your area of responsibility
Took the chance and build CRM.

9. Tell me a time when you take calculated risk
Coming to USA. 

Change job to learn ML

10 Tell me a time when you did something without asking approval from you manager
Honestly, never done it before. But I am not ruling out the possibility. I mean unless something has ot be done and it can't be 
worse, and manager can't be reached.


11 Tell me a time when you dive deep
When I took the chance on tree shaking. building a node module. 


What was the most difficult challenge you faced at work ?

What did you do to help you grow ?
Never dead wondering. Always challenging myself

project you are proud of
Hack day project - spent 3 days (2 week of planning ahead of time) park for charity

disagreement with colleague

go out of scope
Implemented rust CLI to help identify the root cause of dead letters in DLQ.

和别人冲突怎么办
Discuss with an open mind set. Try to look the conflicting issue from the opposite's point of view.
完成不了任务怎么办
Inform as early as possible and re-scope
最有趣的project，要求将具体内容
Hack day project - parking for charity
自己主动做的贡献
Implemented rust-based CLI tooling to help out on on-call tasks. Draining and replaying dead letters from DLQ.
主动发现的项目问题
Model configuration problem. Informed the team by discussing with the lead dev first. 
Forfeited the current trial.
Learnt how to do damage control.
Performed post incident analysis and addressed the root cause. 

自己做错了事怎么办
Admit and learn from it. Perform post incident analysis to ensure it does not happen again
别人做错了事怎么按
1. Perform actions to mitigate the impact caused by such error. 
2. Perform post incident analysis to ensure it does not happen again
3. Admit everyone makes mistakes. It's fine as long as we learnt from it.

conflicts with manager
tough projects
handling mistakes
projects with tight deadline

Tell me about a time you handled pressure.



Tell me about a time you had a conflict with your manager.

technical conflict. 
Buildkite VS Jupyter notebook for deployment
Make application changes to explicitly expose the metrics so we can implement simpler Splunk queries V.S complex regex-based Splunk query for data error monitoring
Enable auto-scheduled deployment V.S. Passively report deployment metrics (think the task from a different point of view)

Tell me about a time you had to work with a difficult coworker.

Makefiles - can't express my love to it.

Tell me about the time when you took an initiative to solve a complex problem.

Debug the mysterious error rate raising issue during hirer-side product trial.

Tell me about the time when you had to learn something new. I was asked more follow-up questions around this.
CloudFormation / Jupyter notebook / Tensorflow / Facebook fasttext / event/lambda based system architecture / [data validation]

Amazon leadership principle 

customer obsession:
ML model name/gender bias - removed
Actively search for solutions to deal with image-based resumes

ownership 

solution partner
long term V.S. short term
never say “that’s not my job”

Follow through change request made through to the data platform, right place to put the table.
Went outside of support hours to fix a bug/replay application records. Give out the opportunity to adopt a puppy.

Invent and simplify
 
Provide 30 day deployment record. Stead, suggested to configure auto-deployment once a week 9am on monday morning.

There is always another solution.

KISS Keep It Simple Stupid
Use boring technologies

infinite ideas

Are Right, A Lot

Learn and Be Curious
Jupiter notebook, AWS cloudformation, Splunk

Hire and Develop the Best

If you are comfortable, you are not growing.

Insist on the highest standards

innovate when you know you are not done

Think Big

Big for Action
Making some decision is better than no decision

做过最难的proj/遇到困难的 bug or technical issue 的故事/你在工作中遇到的最大挑战
有什么你没有被叫去做但主动去做的事情
和组员意见不同怎么办/和manager有意见不同怎么办
limited information的经历
Talk about a time when you gave a simple solution to a complex problem.
Talk about a time when you invented something/innovation experience
Tell me a time when you did more than what was expected for your job.
Tell me a time where you received bad comments/reviews about you/your job.


The biggest mistake you made 对应的是 earn trust, customer obsession，错误要不能是致命伤，突出的是为了customer坚持了什么，没有customer的换成老师同学小组都可以。
Underestimated the complexity of building data-driven product.


Most challenging project 对应的是highest standards，要讲自己怎么走出comfort zone，当然舒适区本身也是一道题。
Running Tensorlfow in lambda / EMR
data validation

miss deadline  对应的是customer obsession， Deliver Results。 要突出怎么让影响最小，让customer不受影响。讲你自己的影响就偏题了。
De-scoped hirer trial integration to still enable the trial. Moving un-essential tasks to phase II to minimize the impact on customers(project timeline) and integration partners.

Disagree with teammate or manager 对应的是earn trust。这个很多人没对准，记住不是强行说服或者没什么理由的顺应别人，为了customer或者最重要目的所以不同意别人 都是好说辞，和事佬的说法是偏题。

Report on production deployment metrics or implement scheduled auto-deployment. I was able to convince the team to let me implement a MVP in a time-boxed manner.
I also proposed to demonstrate the solution in the team to strengthen my argument. The team loved it. I earned trust among the data scientists and become the goto person 
for anything related to implementing CI/CD.

Encourage to think out of the box. Deliver simple yet effective solutions.
Implementing Error rate alert in Splunk(much simpler) VS custom cloud watch metrics.

took a risk, or do not have much time, to make a decision 对应的是 bias for action, Ownership。是行动优先，而且是要突出当仁不让，有责任自己能顶上的意识。比如customer找不到人，刚好你在，你能主动做些事。

From my parent's point of view, leaving Monash University to join REA group.
For me personally, Leaving REA Group to join SEEK. To learn about Machine Learning.

Completely disagree on project planing with the engineering manager.

以上5个bq务必按STAR写下来，基本的基本，必须掌握。例子可以反复用，只要能扣题。
其他问题还有，help the others, find a new way to do something, the failure you met, customer facing experiment (星巴克打工也算的),   

What innovative solutions did u come up with at your work ?
Report on production deployment metrics V.S. implement scheduled auto-deployment 
Implementing in-house bastion host V.S. using AWS VPN(much simpler)
built-in mock instance as part of the library so it's consumers do not need to repeat the process to facilitate test in isolation

Something new you recently learned ? 
Splunk query language

A situation where you had to go out of your way ? 
When I was on call during the hire-side integration trial. The after hour on call hours is until 10pm. However, there was an incident happening upstream at the time(after on-call support).
I am well aware the importance of this incident if we don't mitigate it quickly. So I spent the next 3 hours monitoring our DLQ and the upstream incident while discussing mitigation plan with secondary on-call.
We decided to start preparing the dead letters and as soon as the upstream incident is fixed, we immediately replay the failed applications. Since it is the middle of the Friday night, we expect minimum impact.
The impact if confirmed by our data scientist the following Monday.

A situation where you had to take a risk ?

First instance, I informed the team about a bug I found at the end of a product trial which could render the result of the trial useless.
The team took it well and encouraged me to keep doing it. I learnt how to do damage control from my team lead and we become more risk-aware when conducting experiments afterwards.
I also unofficially become the one to review our end-to-end solution as apparently I can spot bugs that others missed.

Second instance, I attended a meetup regarding ML model bias then started to poke our ML models for name bias. 
I found for some particular instance, adding non-english names to your resume can lower your DeepMatch score.
I reported my findings to the team and the data scientists started dig deeper. The conclusion is that the name-bias only affect 1.5% of the total usage.
This incident triggered some further discussions in the team and everyone is more conscious about treating bias when building ML-powered products.

What was the most difficult challenge you faced at work ?
Learning all of the data science domain knowledge / devOps stuff in a short time
Example, doing some data analysis work, writing sophisticated SQL to verify / evaluate the impact of upgrading to the latest Apache Tika, the library we used to extract resume text

example that you solved something by yourself ?
As an result of a career progression conversion with my manager, we agreed to push me out of the comfort zone, doing some exploratory work, Examples:
1. Re-implement very complicated Spark SQL without much context
1. Validate the data error rate does not change after a major refactor of the current DeepMatch machine learning pipeline
2. evaluate the impact of upgrading to the latest Apache Tika, the library we used to extract resume text
3. Experiment, recommend and then implement a mechanism for data error alerting - Using splunk  
