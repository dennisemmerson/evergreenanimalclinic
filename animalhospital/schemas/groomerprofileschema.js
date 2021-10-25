export default {
    name: "groomerProfile",
    title: "Profile of Groomer",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "subTitle",
            title: "Subtitle",
            type: "string"
        },
       
        {
            name: "staffImage",
            title: "Picture of Groomer",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "experience",
            title: "Experience",
            type: "string"
        },
        {
            name: "education",
            title: "Education",
            type: "string"
        },

        {
            name: "section2Title",
            title: "Title of Section 2",
            type: "string"
        },

        {
            name: "section2Text",
            title: "Text of Section 2",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: []
                }
            ]
        },

    ]
}