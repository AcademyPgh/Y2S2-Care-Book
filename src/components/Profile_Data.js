const Profile={
    caregiver: {
        firstName: "",
        lastName: "",
        address: {
            label: "",
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        },
        phone: {
            label: "",
            number: ""
        },
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
        firstName: "",
        lastName: "",
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
        pharmacist: "",
        address: {
            line1: "", 
            line2: "", 
            city: "", 
            state: "", 
            zip: ""
        },
        phone: "",
    }],
    medication: [{
        medicationName: "", 
        dose: "",
        frequency: ""
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
};

export default Profile;