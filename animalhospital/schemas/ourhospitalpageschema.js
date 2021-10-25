export default {
    name: "ourHospitalPage",
    title: "Our Hospital Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "subTitle",
            title: "Subtitle",
            type: "string"
        },
       
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "section1Title",
            title: "Section 1 Title",
            type: "string"
        },
        {
            name: "section1Text",
            title: "Text of Section 1",
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