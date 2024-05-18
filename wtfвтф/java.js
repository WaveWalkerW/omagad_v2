const teloAnel = document.getElementById('anel');
const teloBaur = document.getElementById('telo');
const teloLina = document.getElementById('lina');
const amir = document.getElementById('amin');
const hoop = document.getElementById('goal');

const rightNachalo = document.getElementById('nach_2');
const rightRuka = document.getElementById('ruka_2');
const leftNachalo = document.getElementById('nach');
const leftRuka = document.getElementById('ruka');

const text_baur = document.getElementById('label-baur');
const text_anel = document.getElementById('label-anel');
const text_lina = document.getElementById('label-lina'); 

function myFunction(x) {
    if (x.matches) {
        console.log('small-screen');
        teloAnel.style.display = 'none';
        teloBaur.style.display = 'none';
        teloLina.style.display = 'none';
        rightNachalo.style.display = 'none';
        rightRuka.style.display = 'none';
        leftNachalo.style.display = 'none';
        leftRuka.style.display = 'none';
        hoop.style.display = 'none';




        teloAnel.style.rotate = '90deg';
        teloBaur.style.rotate = '90deg';
        teloLina.style.rotate = '90deg';

        rightNachalo.style.rotate = '90deg';
        rightRuka.style.rotate = '90deg';
        leftNachalo.style.rotate = '90deg';
        leftRuka.style.rotate = '90deg';


        hoop.style.rotate = '90deg';

        console.log('1')


        addEventListener('click', () => {

            const label = document.querySelector('#rotates');

            label.style.display = 'none';

            teloAnel.style.display = 'block';
            teloBaur.style.display = 'block';
            teloLina.style.display = 'block';
            rightNachalo.style.display = 'block';
            rightRuka.style.display = 'block';
            leftNachalo.style.display = 'block';
            leftRuka.style.display = 'block';
            hoop.style.display = 'block';

            teloBaur.style.height = '300px';
            teloBaur.style.marginTop = '-7%';

            rightNachalo.style.marginTop = '30%';
            rightNachalo.style.marginLeft = '40%';
            rightNachalo.style.rotate = '70deg';
            rightNachalo.style.height = '20px';

            rightRuka.style.height = '70px';
            rightRuka.style.marginTop = '24%'

            leftNachalo.style.height = '20px';
            leftNachalo.style.marginTop = '20%';
            leftNachalo.style.marginLeft = '42%';
            
            leftRuka.style.height = '70px';
            leftRuka.style.marginTop = '14%';
            leftRuka.style.marginLeft = '30%';

            const anel = document.querySelector('#teloAnel');

            teloAnel.style.marginTop = '38%';
            teloAnel.style.marginLeft = '45%';
            anel.style.height = '150px';

            const hep = document.querySelector('#hook');

            hoop.style.marginLeft = '-12%'
            hoop.style.marginTop = '80%'
            hep.style.height = '450px'

            const lina = document.querySelector('#teloLina');

            lina.style.height = '150px';
            lina.style.width = '50px';
            teloLina.style.marginTop = '100%'
            teloLina.style.marginLeft = '30%'

            const ama = document.querySelector('#ama')

            amir.style.rotate = '90deg';
            amir.style.marginTop = '-20%';
            ama.style.height = '500px';

            text_baur.style.fontSize = '10pt';
            text_baur.style.width = '150px';
            text_baur.style.height = '20px';
            text_baur.style.rotate = '90deg';
            text_baur.style.marginLeft = '50%';
            text_baur.style.borderRadius = '20px 20px 20px 20px';

            text_anel.style.fontSize = '10pt';
            text_anel.style.width = '60px';
            text_anel.style.height = '20px';
            text_anel.style.marginTop = '-30px';
            text_anel.style.borderRadius = '20px 20px 20px 20px';

            text_lina.style.opacity = '0';
            text_lina.style.rotate = '0deg';
            text_lina.style.fontSize = '10pt';
            text_lina.style.height = '20px';
            text_lina.style.width = '150px';
            text_lina.style.marginLeft = '50%';
            text_lina.style.marginTop = '-60%';
            text_lina.style.borderRadius =  '20px 20px 20px 0px';

            setTimeout(() => {
                
                text_baur.style.opacity = '100';

                setTimeout(() => {

                    text_anel.style.opacity = '100';

                    setTimeout(() => {

                        text_anel.style.opacity = '0';
                        text_baur.style.opacity = '0';
        
                        teloAnel.style.rotate = '-1460deg';
                        teloAnel.style.marginTop = '20%';
        
                        leftNachalo.style.rotate = '-60deg';
                        
                        leftRuka.style.rotate = '-60deg';
                        leftRuka.style.marginTop = '15%';
                        leftRuka.style.marginLeft = '47%';
        
                        rightNachalo.style.rotate = '-160deg';
                        rightNachalo.style.marginTop = '33%';
                        rightNachalo.style.marginLeft = '42%';
        
                        rightRuka.style.rotate = '-110deg';
                        rightRuka.style.marginTop = '25%';
                        rightRuka.style.marginLeft = '48%';
                        
                        setTimeout(() => {

                            teloAnel.style.transition = '1s ease';

                            teloAnel.style.marginTop = '125%';
                            teloAnel.style.marginLeft = '70%';
                            teloAnel.style.rotate = '270deg';

                            setTimeout(() => {

                                teloAnel.style.marginLeft = '55%';
                                text_lina.style.opacity = '100';

                                setTimeout(() => {

                                    teloAnel.style.display = 'none';
                                    teloBaur.style.display = 'none';
                                    rightNachalo.style.display = 'none';
                                    rightRuka.style.display = 'none';
                                    leftNachalo.style.display = 'none';
                                    leftRuka.style.display = 'none';
                                    hoop.style.display = 'none';


                                    setTimeout(() => {

                                        amir.style.opacity = '100';

                                    }, 1500)

                                }, 2000)

                            }, 1000) 

                        }, 2500) // 1000

                    }, 1500) // 2500

                },500) // 500

            }, 1500) // 1500

        })

            


    } else {
        const label = document.querySelector('#rotates');

        label.style.display = 'none';
        text_anel.style.marginLeft = '3%';
        teloLina.style.marginLeft = '84%';

        addEventListener('click', () => {

            console.log('click-full-screen');
            setTimeout(() => {
                
                text_baur.style.opacity = '100';
                
                setTimeout(() => {
        
                    text_anel.style.opacity = '100';
        
                    setTimeout(() => {
        
                        text_anel.style.opacity = '0';
                        text_baur.style.opacity = '0';
        
                        teloAnel.style.rotate = '-1490deg';
                        teloAnel.style.marginTop = '31%';
                        teloAnel.style.marginLeft = '25%';
        
                        leftNachalo.style.rotate = '-60deg'
                        
                        leftRuka.style.rotate = '-150deg'
                        leftRuka.style.marginTop = '33%'
                        leftRuka.style.marginLeft = '27%'
        
                        rightNachalo.style.rotate = '-160deg'
                        rightNachalo.style.marginTop = '36%'
                        rightNachalo.style.marginLeft = '29.3%'
        
                        rightRuka.style.rotate = '-200deg'
                        rightRuka.style.marginTop = '30%'
        
                        setTimeout(() => {
        
                            teloAnel.style.transition = '1s ease'
        
                            teloAnel.style.marginTop = '20%';
                            teloAnel.style.marginLeft = '88%'
                            teloAnel.style.rotate = '180deg'
                            
                            leftNachalo.style.rotate = '45deg'
                            leftNachalo.style.marginTop = '35%'
                            leftNachalo.style.marginLeft = '26%'
        
                            leftRuka.style.marginLeft = '27.7%'
                            leftRuka.style.marginTop = '31.4%'
        
                            rightNachalo.style.marginTop = '35%'
        
                            rightRuka.style.rotate = '-160deg'
                            rightRuka.style.marginTop = '31%'
                            rightRuka.style.marginLeft = '30%'
        
                            setTimeout(() => {
        
                                teloAnel.style.transition = '1s ease'
        
                                teloAnel.style.marginTop = '32.5%'
        
                                setTimeout(() => {
        
                                    teloLina.style.rotate = '90deg';
        
        
                                    setTimeout(() => {
                                    
                                        teloAnel.style.opacity = '0';
                                        teloBaur.style.opacity = '0';
                                        rightNachalo.style.opacity = '0';
                                        rightRuka.style.opacity = '0';
                                        leftNachalo.style.opacity = '0';
                                        leftRuka.style.opacity = '0';
                                        text_lina.style.opacity = '100';
        
                                        setTimeout(() => {
                                            
                                            amir.style.opacity = '100'
        
                                        }, 1500)
        
                                    }, 500)
        
                                }, 1000)
        
                            }, 1250)
        
                        }, 1500) // 500
        
                    }, 1500) // 1500
                    
                }, 500) // 500
                
            }, 1500)  // 1000
        })
        
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1000px)")
// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});
