console.log('serividor');

Meteor.startup(function (argument) {
	if(!Archivos.find().count()){
		Archivos.insert({
			description:'Documento 1',
			link:'www.google.com'
		});
	}
})