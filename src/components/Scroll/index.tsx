import React from 'react';
import './scroll.css';

const buttonList = [
  { name: 'Para 1', value: 'para_1' },
  { name: 'Para 2', value: 'para_2' },
  { name: 'Para 3', value: 'para_3' },
  { name: 'Para 4', value: 'para_4' },
  { name: 'Para 5', value: 'para_5' },
  { name: 'Para 6', value: 'para_6' },
  { name: 'Para 7', value: 'para_7' },
  { name: 'Para 8', value: 'para_8' },
  { name: 'Para 9', value: 'para_9' },
  { name: 'Para 10', value: 'para_10' },
  { name: 'Para 11', value: 'para_11' },
];

export const Scroll = () => {
  const scrollToPara = (value: string) => {
    const scrollingDiv = document.querySelector('.right_section_container');
    const elementInDiv = document.querySelector(`.${value}`);
    scrollingDiv?.scrollTo({
      top: elementInDiv?.offsetTop - 10,
      behavior: 'smooth',
    }); // eslint-disable-line
  };

  return (
    <div className='scroll_container'>
      <div className='left_section_container'>
        {buttonList.map((btn) => (
          <div
            key={btn.value}
            className='button'
            onClick={() => scrollToPara(btn.value)}
          >
            {btn.name}
          </div>
        ))}
      </div>
      <div className='right_section_container'>
        <p className='para_1'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 1:{' '}
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          purus pretium, sollicitudin nulla id, maximus augue. Donec ut mi elit.
          Cras vel nibh sed turpis ultrices pellentesque. Donec aliquet turpis
          at lorem sagittis, ac cursus ante aliquet. Vivamus et ex lacus. Etiam
          aliquet lectus ac magna aliquet, eu ultrices nisi eleifend. Phasellus
          elementum tellus quis rhoncus ullamcorper. Aenean ex erat, posuere
          finibus magna eget, sollicitudin vulputate purus. Vestibulum eget
          auctor nisi, eget dictum ipsum. Vestibulum ac malesuada lacus. Vivamus
          felis enim, tristique sed porttitor ut, venenatis ac neque. Nulla
          auctor egestas sapien eget bibendum.
        </p>
        <p className='para_2'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 2:{' '}
          </span>
          Suspendisse pharetra maximus erat, nec dictum magna consectetur sed.
          In hac habitasse platea dictumst. Quisque porta mauris risus, non
          blandit elit tristique vitae. Curabitur ut felis tellus. Donec
          venenatis metus tellus. Quisque nisl lectus, ullamcorper et rutrum ut,
          imperdiet non nibh. Aliquam nec erat efficitur, dictum purus eu,
          placerat tortor. Cras eu eros at sem hendrerit convallis. Curabitur
          sit amet erat vitae eros rutrum ultricies sed nec augue. Vestibulum
          eleifend velit in dapibus imperdiet. Nunc convallis quam vitae tempus
          pretium. Quisque eu vestibulum metus. Nam commodo viverra egestas.
          Phasellus congue erat mauris, id placerat est ultrices nec.
        </p>
        <p className='para_3'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 3:{' '}
          </span>
          In velit velit, sollicitudin eu lectus nec, semper tristique velit.
          Quisque ac erat vitae felis malesuada tempus lacinia quis velit. Donec
          lectus ex, ullamcorper et tincidunt eu, eleifend sollicitudin erat.
          Vestibulum bibendum est eu mattis bibendum. Mauris ultricies elementum
          tincidunt. Morbi neque enim, imperdiet sit amet elit id, dictum
          tincidunt lacus. Vivamus interdum urna ac odio commodo, a egestas eros
          condimentum. Sed eu semper dolor. Cras quis dolor quis nibh vehicula
          molestie quis in nibh.
        </p>
        <p className='para_4'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 4:{' '}
          </span>
          Donec sodales sem sit amet ullamcorper ornare. Aliquam pulvinar sem a
          molestie pulvinar. Ut leo nisi, vehicula non mi sed, euismod
          pellentesque nisl. Maecenas mollis, dolor dapibus lobortis tincidunt,
          nunc tortor luctus est, venenatis suscipit nunc sem a dolor.
          Suspendisse volutpat dui ut purus scelerisque, a lacinia turpis
          euismod. Aliquam id arcu id justo congue posuere cursus quis enim.
          Nullam dapibus sodales odio, quis pulvinar elit hendrerit sit amet.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur eleifend orci odio, dignissim
          facilisis enim feugiat sit amet. In placerat nibh ut risus semper, sit
          amet bibendum lorem tempus.
        </p>
        <p className='para_5'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 5:{' '}
          </span>
          Sed mattis posuere leo in mollis. Nunc in sapien gravida, laoreet
          justo consequat, sodales diam. Aenean et dui finibus, laoreet felis
          nec, pellentesque arcu. Donec pellentesque neque a pharetra congue.
          Cras nunc mauris, vulputate pretium ultrices vel, lobortis tristique
          elit. Quisque risus risus, vulputate ac fringilla non, cursus vel
          mauris. Integer eu dolor eget augue blandit venenatis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Maecenas non ex eu
          nulla eleifend efficitur. Proin pulvinar magna eget nisl accumsan,
          quis tempor augue lobortis. Sed feugiat orci a justo lobortis posuere
          ac nec est. Aenean condimentum ultricies tellus, ac gravida nisi
          lacinia nec. Phasellus vel pulvinar tortor.
        </p>
        <p className='para_6'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 6:{' '}
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          elementum nibh turpis, vel mattis ligula iaculis quis. In molestie
          rhoncus ipsum vel fermentum. Nulla feugiat turpis sed lorem imperdiet
          laoreet. Vestibulum nisl eros, auctor et dolor eget, posuere
          vestibulum magna. Quisque non consequat quam. Suspendisse congue
          posuere odio, in sagittis tortor porta ac. Maecenas volutpat euismod
          ipsum quis semper. Nunc ut malesuada sapien, sed fermentum enim.
          Quisque ex enim, scelerisque a mattis id, iaculis nec quam. Curabitur
          laoreet congue purus in finibus. Integer scelerisque ullamcorper
          purus. Donec pharetra erat mi, et egestas lectus accumsan non.
          Pellentesque quis orci non sapien aliquet fermentum eu ac libero.
          Pellentesque libero elit, elementum a tempor a, lobortis eu sem. In eu
          purus sed purus auctor volutpat a id ipsum. Morbi sed felis placerat
          lorem commodo finibus et at nisl.
        </p>
        <p className='para_7'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 7:{' '}
          </span>
          Proin id lectus eu turpis sollicitudin interdum id eu leo. Quisque
          nunc est, porta at consequat id, posuere ac est. Maecenas vel faucibus
          libero, ut consectetur risus. Sed vel tellus in erat vehicula
          fermentum a eu arcu. Nulla aliquam sapien at ligula fringilla, vel
          fermentum ex ultrices. Morbi commodo neque eu mattis rhoncus. Duis
          rutrum leo eget mauris malesuada, ut dignissim massa facilisis. Ut
          quam mauris, tincidunt et urna sed, suscipit sollicitudin sem.
        </p>
        <p className='para_8'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 8:{' '}
          </span>
          Proin semper faucibus erat, a ultrices orci gravida vitae. Maecenas
          eros risus, volutpat eget elementum vitae, sodales id lectus. Cras nec
          urna eu ex tempor dignissim. Donec et porttitor tortor. Donec
          condimentum enim condimentum, imperdiet nibh sed, aliquam ipsum.
          Praesent ante risus, varius id risus vitae, semper pharetra tellus.
          Integer placerat, leo sit amet ultricies egestas, orci quam varius
          lorem, eu efficitur ipsum mauris vel ipsum.
        </p>
        <p className='para_9'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 9:{' '}
          </span>
          Fusce non neque malesuada, lobortis ante faucibus, pellentesque metus.
          Proin sed rutrum arcu. Quisque euismod semper velit, a efficitur eros
          mattis ut. Suspendisse et enim odio. Phasellus at metus hendrerit,
          volutpat arcu scelerisque, rhoncus nisl. Vestibulum non semper arcu,
          aliquet iaculis nisi. Vivamus nisl libero, facilisis in tortor eget,
          faucibus condimentum neque. Proin auctor orci ipsum.
        </p>
        <p className='para_10'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 10:{' '}
          </span>
          Donec viverra aliquet ex ullamcorper pharetra. Aliquam ac lorem nec
          risus consectetur elementum. Donec pretium et mi vel euismod. Donec
          molestie ante sed ligula suscipit hendrerit. Morbi vel nunc nec erat
          laoreet ornare. Mauris vitae luctus ante. Mauris vel leo eget nisi
          efficitur consectetur et vitae eros. Integer bibendum gravida sodales.
          Proin laoreet varius bibendum. Nam ac orci purus. Nullam nisi neque,
          lacinia eu diam vitae, accumsan commodo massa. Aenean arcu elit,
          vehicula euismod tincidunt ac, consequat id ipsum.
        </p>
        <p className='para_11'>
          <span
            style={{ fontWeight: 'bold', marginRight: '5px', color: '#000' }}
          >
            Para 11:{' '}
          </span>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit... There is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain
        </p>
      </div>
    </div>
  );
};
