import { fromEvent, map } from 'rxjs';
const text= document.createElement('div');
text.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tortor at ipsum condimentum porta. In pulvinar eros nec condimentum dignissim. Nam vestibulum nulla ac nisi tempor, sed euismod ligula dapibus. Donec luctus metus ac porta volutpat. Maecenas lacinia dolor vel tristique ultrices. Vestibulum iaculis nec sapien non vulputate. Etiam rhoncus justo orci, congue vestibulum est suscipit ac.
<br/>
Nulla facilisi. Mauris leo risus, lobortis ac urna vel, lacinia finibus turpis. Proin quam tellus, finibus sed tortor nec, venenatis faucibus massa. Maecenas vitae eros metus. Mauris enim nibh, laoreet eu nibh sed, scelerisque pellentesque nibh. Sed gravida pharetra enim, et aliquam purus varius et. Mauris in blandit leo. Proin consequat efficitur sem a porttitor. In mollis condimentum consequat.
<br/>
Ut in mi consectetur orci porttitor dignissim. Sed tristique sagittis diam sed maximus. Integer et rutrum tortor. Sed ultrices mi at dui consequat, in mollis lectus pharetra. Nam ultrices diam eu enim pharetra blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at leo lorem. Sed auctor nulla dolor.
<br/>
Morbi fermentum ornare urna vitae auctor. Nunc interdum, dui laoreet ullamcorper egestas, leo est convallis nisi, ut posuere orci tortor eget elit. Aliquam urna ex, vestibulum eget rutrum et, fringilla sed augue. Nam sed ultrices magna. Phasellus volutpat commodo eros, quis malesuada urna ullamcorper sed. Sed pretium sapien in ipsum facilisis, eu venenatis ante facilisis. Vivamus eros purus, tristique ac eros eget, fringilla rutrum neque. Morbi suscipit libero vitae nunc tincidunt, id tincidunt urna sollicitudin. Donec tristique mi at viverra egestas.
<br/>
Pellentesque vel finibus metus. Praesent commodo massa at tellus lobortis tempus. Nam efficitur lorem ut sem suscipit venenatis. Pellentesque accumsan posuere viverra. Cras quis erat id magna sagittis consectetur sit amet eget velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus mollis, dictum dolor ac, convallis ipsum. Duis egestas feugiat ex, eget consectetur metus sagittis non. Donec mi lacus, placerat quis urna sit amet, maximus mattis nibh. Cras maximus et nisl quis pulvinar. Praesent egestas viverra tortor, in posuere dolor dapibus a. Donec eget diam tincidunt, convallis nisi nec, blandit sapien. Pellentesque laoreet lacus eu velit consequat facilisis. Etiam ante diam, tincidunt vitae felis non, faucibus dictum est. Maecenas at urna sit amet ligula scelerisque pretium.
`;

const body=document.querySelector('body');

body.append(text);


const progressbar=document.createElement('div');
progressbar.setAttribute('class','progress-bar');
body.append(progressbar);


const scroll=fromEvent(document,'scroll').pipe(
    
    );


const calcularPorcentaje=(event)=>{
console.log(event);

    const {
    scrollTop,
    scrollHeight,
    clientHeight
    }=event.target.documentElement;

    console.log({
        scrollTop,
        scrollHeight,
        clientHeight
        });

        return (scrollTop/(scrollHeight-clientHeight)*100);
    

}

const progreso=scroll.pipe(
    map(event=>{
       return calcularPorcentaje(event);
    })
    ).subscribe(porcentaje=>{
   
    console.log(porcentaje);
    
    progressbar.style.width=`${porcentaje}%`;
});
