const Profile={
    caregiver: {
        firstName: "",
        lastName: "",
        addresses: [{
            label: "",
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        }],
        phones: [{
            label: "",
            number: ""
        }],
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
        diagnoses: [{
            diagnosis: ""
        }],
        allergies: [],
        history: ""
    },
    doctors: [{
        label: "",
        firstName: "Andrew",
        lastName: "Yeung",
        phones: [{
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
        // pharmacy: [{
        //     name: "",
        //     addresses: [{
        //         line1: "", 
        //         line2: "", 
        //         city: "", 
        //         state: "", 
        //         zip: ""
        //     }],
        //     phone: "",
        // }]
    }]
}

export default Profile;