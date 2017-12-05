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
        firstName: "",
        lastName: "",
        sex: "", 
        birthdate: "",
        height: "",
        weight: "",
        insurance: "",
        diagnoses: [{
            diagnosis: ""
        }],
        allergies: [{
            allergy: ""
        }],
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
        }]
    }]
}

export default Profile;