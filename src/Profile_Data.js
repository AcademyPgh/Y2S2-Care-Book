const Profile={
    caregiver: {
        firstName: "Kylen",
        lastName: "Tennies",
        addresses: [{
            label: "",
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        }],
        phone: {
            label: "",
            number: ""
        },
        email: '',
        relationship: ''
    },
    child: {
        firstName: "Rob",
        lastName: "Dahl",
        sex: "male", 
        birthdate: "04/29/1992",
        height: "",
        weight: "",
        insurance: "",
        diagnoses: [],
        allergies: [],
        history: ""
    },
    doctors: [{
        label: "",
        firstName: "Andrew",
        lastName: "Yeung",
        phone: [{
            label: "",
            number: ""
        }],
        email: "",
        addresses: [{
            label: "",
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        }],
    }],
    pharmacy: [{
        name: "",
        addresses: [{
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        }],
        phone: "",
    }],
    medication: [{
        label: "", 
        dose: "",
        frequency: "",
        pharmacy: ""
    }]
}

export default Profile;