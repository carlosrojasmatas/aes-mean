var Schema = {
	posts: {

		id:{type:'increments',nullable:false,primary:true},
		type:{type:'string',nullable:false, maxlength:150},
		title:{type:'string',nullable:false, maxlength:150},
		body:{type:'text',nullable:false},
		image:{type:'string',nullable:false},
		thumb:{type:'string',nullable:false},
		startDate:{type:'dateTime',nullable:true},
		endDate:{type:'dateTime',nullable:true},
		created_at:{type:'dateTime',nullable:false},
		updated_at:{type:'dateTime',nullable:false}
	
	},

	dojos: {
		id:{type:'increments',nullable:false,primary:true},
		name:{type:'string',nullable:false, maxlength:150},
		province:{type:'string',nullable:false, maxlength:150},
		city:{type:'string',nullable:false, maxlength:150},
		address:{type:'string',nullable:false, maxlength:150},
		email:{type:'string',nullable:false, maxlength:150},
		phone:{type:'string',nullable:false, maxlength:150},
		sensei:{type:'string',nullable:false, maxlength:150},
		photo:{type:'string',nullable:false, maxlength:150},
		created_at:{type:'dateTime',nullable:false},
		updated_at:{type:'dateTime',nullable:false}
	}
};

module.exports = Schema;