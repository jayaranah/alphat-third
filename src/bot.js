const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
   .::::                                 .::          .::      .::\n\
 .:    .::                               .::           .::   .::  \n\
.::           .::       .::       .::    .::   .::      .:: .::   \n\
.::         .::  .::  .::  .::  .::  .:: .:: .:   .::     .::     \n\
.::   .::::.::    .::.::    .::.::   .:: .::.::::: .::  .:: .::   \n\
 .::    .:  .::  .::  .::  .::  .::  .:: .::.:         .::   .::  \n\
  .:::::      .::       .::         .:: .:::  .::::   .::      .::\n\
                                 .::                              \n");
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: FORKED VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @Alfathdirk @TCR_TEAM and has been forked by @GoogleX !\n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
/* const auth = {
	authToken: 'EoNB4q4P1Dp1mCyUFMXf.1rN0uiXJ9sAFwV2d7TAR3W.AvWfPmCeF2BsyF/totAXsHBkrZEnJWqmGQEpfhSiFXc=',
	certificate: '512d95f1133a80fd07f1f23eb79a4eb18da50cb8c3ae266d68399480b086c0a1',
	email: '',
	password: ''
} */

const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
/* let client =  new LineConnect(auth); */

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
