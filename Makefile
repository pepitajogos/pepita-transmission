deploy_rules:
	firebase deploy --only firestore:rules

deploy_functions:
	firebase deploy --only functions

deploy_hosting:
	firebase deploy --only hosting

deploy:
	firebase deploy