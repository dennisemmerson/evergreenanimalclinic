export default {
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
        {
            name: "bannerTitle",
            title: "Title of Banner",
            type: "string"
        },
        {
            name: "bannerContent",
            title: "Content in Banner",
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
            name: "bannerImage",
            title: "Image in Banner",
            type: "image",
            options: {
                hotspot: true,
            }
        },



        {
            name: "section1FirstBlockTitle",
            title: "Title of First Block in Section 1",
            type: "string"
        },
        {
            name: "section1FirstBlockContent",
            title: "Content of First Block in Section 1",
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
            name: "section1SecondBlockTitle",
            title: "Title of Second Block in Section 1",
            type: "string"
        },
        {
            name: "section1SecondBlockContent",
            title: "Content of Second Block in Section 1",
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
            name: "section1ThirdBlockTitle",
            title: "Title of Third Block in Section 1",
            type: "string"
        },
        {
            name: "section1ThirdBlockContent",
            title: "Content of Third Block in Section 1",
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
            name: "section2Content",
            title: "Content in Section 2",
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
            name: "section3ImageTitle",
            title: "Title of Image in Section 3",
            type: "string"
        },
        {
            name: "section3Title",
            title: "Title of Section 3",
            type: "string"
        },
        {
            name: "section3Content",
            title: "Content in Section 3",
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
            name: "section3Image",
            title: "Image in Section 3",
            type: "image",
            options: {
                hotspot: true,
            }
        },




        {
            name: "section4Title",
            title: "Title of Section 3",
            type: "string"
        },
        {
            name: "section4Content",
            title: "Content in Section 4",
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
            name: "section4Image",
            title: "Image in Section 4",
            type: "image",
            options: {
                hotspot: true,
            }
        },
       

    ]
}