const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            // unique: boolean, whether to define a unique index on this property.
            unique: true
        },
        email: {
            type: String,
            unique: true,
            // https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "please enter a valid email"
            },
            required: [true, 'Email is required'],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'  
        },
    ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;