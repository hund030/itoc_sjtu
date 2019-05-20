# Co-Design 2019 website

## requirements:

    yarn >=1.15.2
    nodejs >= 10.15.3

## usage:

Assuming you are in $root/antd-demo directory.

Before all, install all packages needed:
> yarn install

To start your local website on PORT=3000, using:
> yarn start 

You can visit [localhost:3000](localhost:3000) to see the demo.

To visit your website on any port you want,  edit package.json
>  "start": "react-scripts start",

to 
>  "start": "PORT=$PORT react-scripts start",

