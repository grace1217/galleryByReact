require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
let imagesDatas = require('../data/imageData.json')

//利用自执行函数，将图片名信息转成图片URL路径信息
imagesDatas = (function getImageURL(imagesDataArr){
	
	for(let i = 0,j=imagesDataArr.length; i<j; i++){
		let singleImageDate = imagesDataArr[i];
		singleImageDate.imageURL = require('../images/'+singleImageDate.fileName);
	 	imagesDataArr[i] = singleImageDate;
	}
	return imagesDataArr;
})(imagesDatas)


class AppComponent extends React.Component {
  render() {
    return (
    	<section className = 'stage'>
    		<section className = 'img-sec'>
    		</section>
    		<nav className='controller-nav'>
    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
