document.addEventListener("DOMContentLoaded", () => {

    let puntos = 0;

    const boton = document.getElementById("btnIniciar");
    const input = document.getElementById("nombreUsuario");
    const saludo = document.getElementById("saludo");

    const calculadora = document.getElementById("calculadora");
    const registro = document.getElementById("registro");

    const juegoGo = document.getElementById("juegoGo");
    const juego = document.getElementById("juego");

    const resultadoBtn = document.getElementById("resultado");
    const resultadoMensajito = document.getElementById("resultadoMensajito");
    const re = document.getElementById("re");

    /* ========================= */
    /* INICIO */
    /* ========================= */

    boton.addEventListener("click", () => {

        const nombree = input.value.trim();

        if (nombree !== "") {
            registro.classList.add("hidden");
            calculadora.classList.remove("hidden");

            saludo.textContent =
            `Que ondaaaaa ${nombree}... te explico facil como funciona :)`;
        } else {
            alert("Por favor ingresa tu nombre");
            input.focus();
        }
    });

    juegoGo.addEventListener("click", () => {
        calculadora.classList.add("hidden");
        juego.classList.remove("hidden");
    });

    /* ========================= */
    /* RESULTADO */
    /* ========================= */

    resultadoBtn.addEventListener("click", () => {

        const nombre = input.value.trim();
        const mujer = document.getElementById("mujer").value.trim();

        if (mujer === "") {
            alert("Se te olvido el nombre del bandido jaja");
            return;
        }

        puntos = 0;

        let dato1="",dato2="",dato3="",dato4="",dato5="";
        let dato6="",dato7="",dato8="",dato9="",dato10="",dato11="";

        const v1=document.getElementById("registro1").value;
        const v2=document.getElementById("registro2").value;
        const v3=document.getElementById("registro3").value;
        const v4=document.getElementById("registro4").value;
        const v5=document.getElementById("registro5").value;
        const v6=document.getElementById("registro6").value;
        const v7=document.getElementById("registro7").value;
        const v8=document.getElementById("registro8").value;
        const v9=document.getElementById("registro9").value;
        const v10=document.getElementById("registro10").value.toLowerCase();
        const v11=document.getElementById("registro11").value.toLowerCase();

        const inputImagen=document.getElementById("registro12");
        const imgResultado=document.getElementById("imgResultado");

        if(
            !v1||!v2||!v3||!v4||!v5||
            !v6||!v7||!v8||!v9||!v10||!v11
        ){
            alert("Te faltan campos por rellenar crack");
            return;
        }

        /* ========================= */
        /* IMAGEN */
        /* ========================= */

        if(inputImagen.files && inputImagen.files[0]){
            imgResultado.src=URL.createObjectURL(inputImagen.files[0]);
            imgResultado.classList.remove("hidden");
        }else{
            imgResultado.classList.add("hidden");
        }

        juego.classList.add("hidden");
        re.classList.remove("hidden");

        /* ========================= */
        /* PUNTAJES (TU LOGICA) */
        /* ========================= */

        if(v1==1){puntos+=100;dato1="Rubio";}
        else if(v1==2){puntos+=80;dato1="Castaño";}
        else if(v1==3){puntos+=60;dato1="Negro";}
        else if(v1==4){puntos+=20;dato1="Rojizo";}
        else if(v1==5){puntos+=30;dato1="Otro color";}

        if(v2==1){puntos+=70;dato2="Liso";}
        else if(v2==2){puntos+=100;dato2="Ondulado";}
        else if(v2==3){puntos+=50;dato2="Churco";}
        else if(v2==4){puntos+=300;dato2="CALVOOOO";}

        if(v3==1){puntos+=90;dato3="Negros";}
        else if(v3==2){puntos+=70;dato3="Cafes";}
        else if(v3==3){puntos+=100;dato3="Verdes";}
        else if(v3==4){puntos+=100;dato3="Azules";}
        else if(v3==5){puntos+=120;dato3="Claritos";}

        if(v4==1){puntos+=90;dato4="Cortico";}
        else if(v4==2){puntos+=80;dato4="Normalito";}
        else if(v4==3){puntos+=70;dato4="Re grande";}

        if(v5==1){puntos+=130;dato5="Bumangues";}
        else if(v5==2){puntos+=100;dato5="Paisa";}
        else if(v5==3){puntos+=60;dato5="Costeño";}
        else if(v5==4){puntos+=60;dato5="Boyacense";}
        else if(v5==5){puntos+=70;dato5="Rolo";}
        else if(v5==6){puntos+=80;dato5="Caleño";}
        else if(v5==7){puntos+=10;dato5="Venezolano";}
        else if(v5==8){puntos+=50;dato5="Otra nacionalidad";}

        if(v6==1){puntos+=110;dato6="Blanquito";}
        else if(v6==2){puntos+=60;dato6="Morenito";}
        else if(v6==3){puntos+=20;dato6="Afrocolombiano";}
        else if(v6==4){puntos+=70;dato6="Amarillisimo";}

        if(v7==1){puntos+=120;dato7="Alto";}
        else if(v7==2){puntos+=70;dato7="Igual";}
        else if(v7==3){puntos+=50;dato7="Bajito";}

        if(v8==1){puntos+=80;dato8="Flaco";}
        else if(v8==2){puntos+=90;dato8="Normalito";}
        else if(v8==3){puntos+=60;dato8="GORDO";}

        if(v9==1){puntos+=100;dato9="Mayor que tu";}
        else if(v9==2){puntos+=80;dato9="Misma edad";}
        else if(v9==3){puntos+=50;dato9="Menor q tu (Pedofila)";}

        if(v10==="si"){puntos+=100;dato10="si lo extrañas.. awwwww";}
        else{puntos+=50;dato10="No lo extrañas JAJJKAKJAKJSAKJSALKJSALKJDSALKJSALKJ";}

        if(v11==="si"){puntos+=150;dato11="Muy popular en redes";}
        else{puntos+=20;dato11="No lo conoce ni la mama";}

        /* ========================= */
        /* 🔥 TUS NIVELES ORIGINALES */
        /* ========================= */

        function mensajeRandom(arr){
            return arr[Math.floor(Math.random()*arr.length)];
        }

        let nivel="";
        let mensajeFinal="";

        const niveles={
            nivel1:[
                `Este bandido alcanzo el maximo nivel OMG, que facha tiene este prro, sin duda es la debilidad de las bandidas, vdd ${nombre}?, aunq podria decirse que es medio marica por su cuerpo ${dato8}, te falta proteina y buena alimentacion ${mujer}, pero sin duda es muy atractivo, pero tiene pinta de marica eso si, entre mas lindo mas le puede gustar el chimbo JAJJJAJ`,
                `Uy papi, de casualidad ${mujer} no es homosexual?, oseaa... tiene toda la pinta pq esta BOF, pero entre mas lindo sea el man mas marica se vuelve, pasa de gustarle las bandidas a gustarle a los manes JAJJAJA, pero sin duda esta re facha el ${mujer}, aunq deberia cambiarse el color de pelo, disq ${dato1}, yo le recomendario un pelo azul para asustar a las armys kakkaka`,
                `BOEEEEE, que onda con el ${mujer}, su color de ojos ${dato3} no cuadra mucho con la descripcion q me diste, y su color de piel ${dato6} meh... nada mal, pero tiene pinta de q se puede volver hasta maricon jajaja, cuidado con el ${nombre}, te gustan los gays o q?, pues, no lo digo pq lo sea, o si?, me falto preguntar eso jajaja, péro no cabe duda q ${mujer} es muy lindo, se esta voltiando al otro bando pero eso se corrige`,
                `¡ALERTA DE HOMOSEXUAL!, tiene toda la pinta de ser marica, pero no lose, los datos q me diste de ${dato7} y ${dato6}, son la clara evidencia de q se puede voltiar, pero naaaa, el man puede estar con la que quiera, hasta con manes si quiere, puro gay con esas especificaciones jajaksdlajdka`
            ],
           nivel2: [
                `No joda ${nombre}, con pelo ${dato1}, cuerpo ${dato8} y estatura ${dato7}, este man no impone respeto sino lástima. Dice que es bandido pero ni el algoritmo se lo cree. Nivel tan bajo que ni ${dato11}. Cule perro certificado, sin apelación.`,
                `${nombre} está grave. Con ojos ${dato3}, piel ${dato6} y actitud toda perdida, este man promete cero emociones.No enamora, no impresiona y encima ${dato10}. Bandido versión dañada, directo al descarte.`,
                `Este resultado es preocupante. ${nombre} con flow ${dato2} y cuerpo ${dato8} no mete miedo, mete duda. Bandido solo en su cabeza, cule perro con diploma.`,
                `${mujer}, voy a ser sincero porque los números no mienten. Con ese pelo ${dato1}, cuerpo ${dato8} y estatura ${dato7}, este man no impone respeto ni cuando se enoja. Dice que es bandido, pero en la práctica es puro cuento. Ni ${dato11}, ni presencia, ni impacto. Resultado crítico, bandido cule perro certificado por el sistema.`,
                `No es por tirarte hate ${mujer}, pero con esos datos el sistema no tuvo piedad. ${dato5}, cuerpo ${dato8} y esa combinación rara no cuajan ni con suerte. Bandido solo en su mente, cule perro nivel profesional.`,
                `Este man quiere jugar a ser bandido, pero los puntos lo dejaron mal parado. ${mujer} no mete miedo, mete confusión. Ni peligroso ni interesante. Bandido cule perro, directo al archivo.`,
                `${mujer}, el sistema no tuvo piedad con vos. Desde el pelo ${dato1} hasta el cuerpo ${dato8}, todo indica que este bandido quiso pero no pudo. La estatura ${dato7} no ayuda, el flow ${dato2} no convence y la presencia en redes ${dato11} es prácticamente inexistente. Ni siquiera el dato sentimental ${dato10} logra salvar algo. Conclusión clara y directa: bandido cule perro, nivel crítico, más cuento que realidad.`,
                `El análisis completo dejó a ${mujer} muy mal parado. Ojos ${dato3}, piel ${dato6}, nacionalidad ${dato5}… todo sumó, pero no a favor. Este perfil no genera peligro, genera dudas. El sistema detectó falta de impacto, cero intimidación y mucha ilusión. Bandido cule perro certificado, sin derecho a reclamo.`,
            ],
            nivel3: [
                `${mujer} tiene labia, pero hasta ahí. Con pelo ${dato1}, cuerpo ${dato8} y actitud dudosa, vende una película que no coincide con la realidad. Promete caos, pero entrega rutina. Bandido mentiroso detectado por el algoritmo.`,
                `Este man dice que es serio cuando conviene y bandido cuando le sirve. ${dato10} y ${dato11} lo dejaron mal parado. No es desastre, pero tampoco es real. Bandido mentiroso nivel medio.`,
                `${mujer} habla bonito, pero cuando uno mira los datos, todo se cae. Flow ${dato2}, presencia floja y mucha historia inventada. Mentiroso funcional.`,
                `No es malo, pero exagera. ${mujer} se vende como bandido élite,pero los puntos dicen otra cosa. Mentiroso con potencial, pero mentiroso al fin.`,
                `Este perfil es puro humo. Mucho cuento ${mujer}, poca acción. Bandido mentiroso aprobado por el sistema.`,
                `${mujer} tiene labia, eso es verdad, pero los datos no respaldan el discurso. Pelo ${dato1}, cuerpo ${dato8} y estatura ${dato7} prometen más de lo que entregan. La presencia ${dato11} es irregular y el dato ${dato10} deja dudas. Bandido mentiroso: vende película que no coincide con la realidad.`,
                `El sistema detectó incoherencias claras en el perfil de ${mujer}. Dice una cosa, pero ${dato2} y ${dato9} dicen otra. No es un desastre total, pero tampoco es confiable. Bandido mentiroso confirmado por pura estadística.`,
            ],
            nivel4: [
                `${nombre} no es caos total, pero tampoco es confiable. Con ojos ${dato3}, piel ${dato6} y ese flow ${dato2}, este man se distrae fácil. Bandido infiel confirmado.`,
                `Este perfil no miente, pero tampoco se compromete. ${dato10} y ${dato11} indican rotación constante. Bandido infiel promedio, peligro controlado.`,
                `Este perfil es balanceado.${mujer} sabe cuándo frenar, aunque a veces le cuesta. Nivel intermedio aprobado.`,
                `No es santo ni problema. Bandido medio infiel funcional, en observación constante.`,
                `${mujer} podría portarse bien si quisiera del todo. Bandido medio infiel estable.`,
                `Ojito con ${mujer}. Con ojos ${dato3}, piel ${dato6} y ese flow ${dato2}, este bandido se distrae fácil. La estabilidad no es su fuerte y ${dato10} lo deja en evidencia. Bandido infiel confirmado.`,
                `${mujer} tiene presencia, pero no constancia. Hoy aparece, mañana quién sabe. La combinación de ${dato8}, ${dato11} y ${dato9} indica rotación constante. Infiel promedio.`,
            ],
            nivel5: [
                `Contra todo pronóstico, ${mujer} decidió hacer las cosas bien. Tiene pinta de problema, pero mente tranquila. Bandido fiel real.`,
                `${mujer} está en la mitad del camino. Tiene pinta, tiene datos decentes como ${dato3} y ${dato8}, pero todavía mira de más. Bandido medio infiel en observación.`,
                `Este perfil es balanceado. ${mujer} sabe cuándo frenar, aunque a veces le cuesta. Riesgo moderado, control parcial.`,
                `${mujer} no es ningún angelito, eso está claro desde que uno ve datos como ${dato1} y ${dato2}. El man sabe lo que hace, sabe cómo verse bien, cómo hablar bonito y cómo convencer, pero el problema es que le gusta jugar en varias canchas al mismo tiempo. No es falta de opciones, es exceso de confianza. Con ese combo de ${dato3} y ${dato6}, cualquiera se confunde, pero él ya va con malicia incluida. Bandido fino, pero bandido al fin y al cabo.`,
                `Con ${dato4} y ${dato7} uno pensaría que ${mujer} es serio, centrado y estable… pero no. El man se porta bien hasta que tiene oportunidad. No es desordenado ni caótico, simplemente no sabe quedarse quieto. Le gusta gustar, le gusta la atención y le gusta saber que puede cuando quiere. No destruye por deporte, pero tampoco se mide mucho. Infiel elegante, de esos que no parecen, pero son.`,
                `${mujer} juega a dos bandas con una tranquilidad que asusta. Según los datos (${dato1}, ${dato3}, ${dato8}), tiene todo para quedarse firme, pero decide probar suerte extra “por si acaso”. No es inmadurez total, es más bien una mentalidad de “yo puedo con todo”. No hace show, no arma escándalos, solo desliza errores con cara de inocente. Bandido calculador, no improvisado.`,
            ],
            nivel6: [
                `Contra todo pronóstico, ${mujer} decidió hacer las cosas bien. Con datos como ${dato3}, ${dato8} y ${dato10}, el sistema detectó estabilidad. Bandido fiel real.`,
                `Increíble pero cierto. ${nombre} con ojos ${dato3} y flow ${dato2} decidió portarse bien. Tiene pinta de bandido, pero corazón noble. Cule bandido fiel, casi un milagro.`,
                `${mujer} ya no entra ni siquiera en la categoría de persona problemática, esto es directamente un archivo corrupto. Todo en él está mal cargado: decisiones, actitudes, personalidad y criterio. Según los datos (${dato1}, ${dato2}, ${dato3}), nunca hubo coherencia desde el inicio. No mejora, no empeora, simplemente da vueltas en el mismo error creyendo que está avanzando. Es el típico caso que uno mira y dice: “no hay nada que hacer”. File dañado, imposible de recuperar.`,
                `Lo de ${mujer} es impresionante pero en el peor sentido. Con información como ${dato4}, ${dato5} y ${dato6}, queda claro que no hay evolución, solo repetición. Siempre promete, nunca cumple. Siempre habla, nunca respalda. Siempre culpa, nunca asume. Es un conjunto de malas decisiones encadenadas que se cree especial solo porque hace ruido. File humano: ocupa espacio, consume recursos y no sirve para nada útil.`,
                `${mujer} es el final del camino. Después de este punto no hay rangos más bajos, solo el reinicio total o el abandono. Los datos (${dato1}, ${dato4}, ${dato6}, ${dato7}) confirman que todo intento de mejora se queda en intención. Vive reaccionando, nunca construyendo. No deja huella positiva, solo cansancio. File humano completo: error permanente, sin respaldo y sin copia de seguridad.`,
            ],
            nivel7: [
                `${mujer} es el claro ejemplo de todo lo que NO se debe ser. Una mezcla rara entre desorden mental, malas decisiones y puro ego inflado sin respaldo. Vive creyéndose alguien importante cuando en realidad no sostiene nada: ni palabras, ni acciones, ni actitudes. Según los datos registrados (${dato1}, ${dato2}, ${dato3}), siempre aparece en los mismos errores, repitiendo la misma historia patética como si algún día fuera a cambiar por arte de magia. No piensa, no analiza, no aprende. Solo estorba, confunde y decepciona. Bandido de la MONDA, literal.`,
                `Hablar de ${mujer} ya es perder el tiempo. Todo en él es improvisado, mal hecho y sin sentido. Se mueve por impulsos baratos, opiniones ajenas y falsas ideas de grandeza. Según ${dato1} y ${dato2}, nunca termina lo que empieza, y cuando cree que va bien, se cae solo por bruto. No tiene visión, no tiene autocontrol y mucho menos carácter. Es ruido, no presencia. Es problema, no solución. Un bandido que ni para bandido sirve.`,
                `${mujer} vive en su propia mentira. Se inventa un personaje que no puede sostener ni cinco minutos. Los datos (${dato3}, ${dato4}) muestran claramente que cada decisión que toma lo hunde más, pero aun así insiste. No escucha, no reflexiona, no acepta errores. Prefiere quedar como payaso antes que mejorar. Es el típico que habla duro pero actúa flojo. Bandido de cartón, mentalidad frágil y autoestima basada en pura fantasía.`,
                `Lo de ${mujer} ya no es mala suerte, es incompetencia constante. Todo lo hace mal y aun así cree que el mundo está en su contra. Según ${dato1}, ${dato2} y ${dato3}, siempre culpa a otros por sus cagadas. No tiene disciplina, no tiene enfoque y no tiene respeto ni por él mismo. Donde llega, todo se desordena. Donde opina, estorba. Donde actúa, falla. Nivel basura confirmado.`,
                `${mujer} representa el fondo del barril. El punto donde ya no hay excusas, solo mediocridad pura. Datos como ${dato1} y ${dato4} confirman que no hay evolución, solo repetición del mismo fracaso. Vive reaccionando, nunca controlando. Quiere atención sin mérito, respeto sin acciones y resultados sin esfuerzo. Bandido de la MONDA, sin mente, sin rumbo y sin salvación si no cambia TODO desde cero.`
            ]  
        };

        if(puntos>=1000){
            nivel="BANDIDO DE BANDIDOS";
            mensajeFinal=mensajeRandom(niveles.nivel1);
        }else if(puntos>=900){
            nivel="BANDIDO CULE PERRO";
            mensajeFinal=mensajeRandom(niveles.nivel2);
        }else if(puntos>=840){
            nivel="BANDIDO MENTIROSO";
            mensajeFinal=mensajeRandom(niveles.nivel3);
        }else if(puntos>=730){
            nivel="BANDIDO INFIEL";
            mensajeFinal=mensajeRandom(niveles.nivel4);
        }else if(puntos>=610){
            nivel="BANDIDO MEDIO INFIEL";
            mensajeFinal=mensajeRandom(niveles.nivel5);
        }else if(puntos>=560){
            nivel="BANDIDO FIEL (CULE ESTUPIDO)";
            mensajeFinal=mensajeRandom(niveles.nivel6);
        }else if(puntos>=500){
            nivel="BANDIDO DE LA MONDA";
            mensajeFinal=mensajeRandom(niveles.nivel7);
        }else{
            nivel="SIN CLASIFICAR";
            mensajeFinal="No hay nada aqui, hiciste algo mal";
        }

        resultadoMensajito.innerHTML=`
            <strong>${nombre}...</strong><br><br>
            El puntaje de ${mujer} es <strong>${puntos}</strong><br>
            Nivel: <strong>${nivel}</strong><br><br>
            ${mensajeFinal}
        `;
    });

});

/* ========================= */
function volver(){
    location.reload();
}

function menu(){
    window.open("https://dvskked.github.io/bandidaje.github.io/");
}
