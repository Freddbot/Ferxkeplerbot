importar  buscar  desde  'node-fetch' ;
importar  axios  desde  'axios' ;
importar  { youtubedl ,  youtubedlv2 }  desde  '@bochilteam/scraper' ;
importar  fs  desde  "fs" ;
importar  yts  desde  'yt-search' ;
dejar  límite1  =  100 ;
sea  límite2  =  400 ;
sea  limit_a1  =  50 ;
sea  limit_a2  =  400 ;
controlador constante  =  asíncrono  (  m , {  conexión , comando , argumentos , texto , prefijo usado } )  =>  {
  if  ( ! text )  throw  `*[ ℹ️ ] Hace falta el título o enlace del video de YouTube.*\n\n*[ 💡 ] Ejemplo:* _ $ { usedPrefix  +  command } Good Feeling - Flo Rida_` ;
    const  yt_play  =  espera  búsqueda ( args . join ( '' ) ) ;
    let  texto adicional  =  '' ;
    si  ( comando  ===  'reproducir' )  {
      Texto adicional  =  'audio' ;
    }  si no  ( comando === 'jugar2' ) {    
      texto adicional  =  'vídeo' ;
    }
    const  texto1  =  `*[ 📥 ] Descargas - Play*\n\n▢ *Título:* ${ yt_play [ 0 ] . título } \n\n▢ *Publicado:* ${ yt_play [ 0 ] . hace } \n\n▢ *Duración:* ${ secondString ( yt_play [ 0 ] . duración . segundos ) } \n\n▢ *Vistas:* ${ ` ${ MilesNumber ( yt_play [ 0 ] . vistas ) } ` } \n\n▢ *Autor:* ${ yt_play [ 0 ] . autor . nombre } \n\n▢ *ID:* ${ yt_play [ 0 ] . videoId } \n\n▢ *Tipo:* ${ yt_play [ 0 ] . escriba } \n\n▢ *Enlace:* ${ yt_play [ 0 ] . url } \n\n▢ *Canal:* ${ yt_play [ 0 ] . autor . url } \n\n*[ ℹ️ ] Se está enviando el ${ adicionalText } . espera...*` . recortar ( ) ;
    conexión . sendMessage ( m . chat ,  { imagen : { url : yt_play [ 0 ] . miniatura } ,  título : texto1 } ,  { citado : m } ) ;
    si  ( comando  ==  'reproducir' )  {
    intentar  {   
     audio  constante =  global . API ( 'ApiEmpire' , `/api  / v1/ytmp3?url= ${ yt_play [ 0 ] .url } ` )
    const  ttl  =  espera  yt_play [ 0 ] . título
    const  buff_aud  =  espera  getBuffer ( audio ) ;
    const  fileSizeInBytes  =  buff_aud . byteLongitud ;
    const  tamañoarchivoInKB  =  tamañoarchivoInBytes  /  1024 ;
    const  tamaño de archivo en MB  =  tamaño de archivo en KB  /  1024 ;
     tamaño  constante = tamaño  de archivo en MB . a fijo ( 2 ) ;       
    si  ( tamaño  >=  límite_a2 )  {  
    espera  conexión . sendMessage ( m . chat ,  { text : `*[ ✔ ] Descargue su vídeo en ${ audio } *` } ,  { quoted : m } ) ;
    devolver ;    
    }     
    si  ( tamaño  >=  límite_a1  &&  tamaño  <=  límite_a2 )  {  
    espera  conexión . sendMessage ( m . chat ,  { documento : buff_aud ,  tipo mime : 'audio/mpeg' ,  nombre de archivo : ttl  +  `.mp3` } ,  { citado : m } ) ;   
    devolver ;
    }  demás  {
    espera  conexión . sendMessage ( m . chat ,  { audio : buff_aud ,  tipo mime : 'audio/mpeg' ,  nombre de archivo : ttl  +  `.mp3` } ,  { citado : m } ) ;   
    devolver ;    
    } }  atrapar  {
    throw  '*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*' ;    
    } }
    si  ( comando  ==  'jugar2' )  {
    intentar  {   
     vídeo  constante =  global . API ( 'ApiEmpire' , `/api  / v1/ytmp4?url= ${ yt_play [ 0 ] .url } ` )
    const  ttl2  =  esperar  yt_play [ 0 ] . título
    const  buff_vid  =  espera  getBuffer ( vídeo ) ;
    const  fileSizeInBytes2  =  buff_vid . byteLongitud ;
    const  tamañoarchivoInKB2  =  tamañoarchivoInBytes2  /  1024 ;
    const  tamañoarchivoInMB2  =  tamañoarchivoInKB2  /  1024 ;
     tamaño  constante2 =  tamaño de archivo en MB2 . a fijo ( 2 ) ;       
    si  ( tamaño2  >=  límite2 )  {  
    espera  conexión . sendMessage ( m . chat ,  { text : `*[ ✔ ] Descargue su video en ${ video } *` } ,  { quoted : m } ) ;
    devolver ;    
    }     
    if  ( tamaño2  >=  límite1  &&  tamaño2  <=  límite2 )  {  
    espera  conexión . sendMessage ( m . chat ,  { documento : buff_vid ,  tipo mime : 'video/mp4' ,  nombre de archivo : ttl2  +  `.mp4` } ,  { citado : m } ) ;   
    devolver ;
    }  demás  {
    espera  conexión . sendMessage ( m.chat , { vídeo : buff_vid , mimetype : ' video/mp4' , nombre de archivo : ttl2 + `.mp4` } , { citado : m } ) ;         
    devolver ;    
    } }  atrapar  {
    throw  '*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*' ;    
    }
  }
} ;
manipulador . ayuda  =  [ 'reproducir' ,  'reproducir2' ] . map ( ( v )  =>  v  +  '<busqueda>' ) ;
manipulador . etiquetas  =  [ 'descargador' ] ;
manipulador . comando  =  / ^ ( reproducir | reproducir2 ) $ / i ;
exportar  controlador predeterminado  ;búsqueda de función  asíncrona ( consulta , opciones = { } ) {    
   búsqueda  constante =  esperar  yts . buscar ( { consulta ,  hl : 'es' ,  gl : 'ES' , ... opciones } ) ;
  volver  a buscar . vídeos ;
}

función  NúmeroMillas ( número )  {
  const  exp  =  / ( \d ) (? = ( \d {3} ) + ( ? ! \ d ) ) / g ;
   representante  constante =  '$1.' ;
  constante  arr  =  número . Encadenar ( ) . dividir ( '.' ) ;
  arreglo [ 0 ]  =  arreglo [ 0 ] . reemplazar ( exp ,  rep ) ;
  devolver  arreglo [ 1 ] ? llegar . unirse ( '.' ) : arr [ 0 ] ;
}

función  segundacadena ( segundos )  {
  segundos  =  Número ( segundos ) ;
  constante  d  =  Matemáticas . piso ( segundos  /  ( 3600  *  24 ) ) ;
  constante  h  =  Matemáticas . piso ( ( segundos  %  ( 3600  *  24 ) )  /  3600 ) ;
  constante  m  =  Matemáticas . piso ( ( segundos  %  3600 )  /  60 ) ;
  constante  s  =  Matemáticas . piso ( segundos  %  60 ) ;
  constante  dPantalla  =  d  >  0 ? d  +  ( d  ==  1 ? 'd ' : 'd ' ) : '' ;
  constante  hPantalla  =  h  >  0 ? h  +  ( h  ==  1 ? 'h ' : 'h ' ) : '' ;
  constante  mPantalla  =  m  >  0 ? m  +  ( m  ==  1 ? 'm ' : 'm ' ) : '' ;
  constante  sPantalla  =  s  >  0 ? s  +  ( s  ==  1 ? 's' : 's' ) : '' ;
  devolver  dDisplay  +  hDisplay  +  mDisplay  +  sDisplay ;
}

función  bytesToSize ( bytes )  {
  devolver nueva  Promesa ( ( resolver ,  rechazar )  =>  {
     tamaños  constantes =  [ 'Bytes',  'KB' ,  'MB' ,  'GB' ,  'TB' ] ;
    si ( bytes  ===  0 )  devuelve  'n/a' ;
    const  i  =  parseInt ( Matemáticas . piso ( Matemáticas . log ( bytes )  /  Matemáticas ( 1024 ) ) )_ _ _ _ _ 
    si  ( i  ===  0 )  resolver ( ` ${ bytes } ${ tamaños [ i ] } `);
    resolver ( ` ${ ( bytes  /  ( 1024  **  i ) ) . toFixed ( 1 ) }  ${ tamaños [ i ] } `);
  } ) ;
  }const  getBuffer  =  asíncrono  ( url ,  opciones )  =>  {
    opciones ? opciones : { } ;
    const  res  =  await  axios ( { método : 'obtener' , URL ,  encabezados : { 'DNT' : 1 ,  'Solicitud de actualización-insegura' : 1 , } , ... opciones ,  tipo de respuesta : 'arraybuffer' } ) ;
    devolver  resolución . datos ;
} ;
