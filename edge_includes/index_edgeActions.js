
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){audiolink_1='media/deuses.mp3'+'media/deuses.ogg'
var AudioPlay=0;var PlayOn=0;var legendasOn=0;sym.VoltarClipe=function(){var rew=sym.getVariable('numberprev');sym.play(rew);sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(0);PlayOn=0;};sym.FrenteClipe=function(){var frente=sym.getVariable('numbernext');sym.play(frente);sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(0);PlayOn=0;};sym.OverPlay=function(){if(PlayOn==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(250);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(750);}};sym.OutPlay=function(){if(PlayOn==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(0);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(500);}};sym.AudioOn=function(){if(AudioPlay==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(250);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(750);}};sym.AudioOf=function(){if(AudioPlay==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(0);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(500);}};sym.AudioMute=function(){if(AudioPlay==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(500);AudioPlay=1;}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_AUDIO').stop(0);AudioPlay=0;}};sym.ControlePlay=function(){if(PlayOn==0){sym.stop();sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(500);PlayOn=1;}
else{sym.play();sym.getSymbol('UIControlsPlayer').getSymbol('BT_PLAY').stop(0);PlayOn=0;}};sym.Legendar=function(){if(legendasOn==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(500);sym.getSymbol('UIControlsPlayer').$('Textlegendas').css({'opacity':'1'});legendasOn=1;}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(0);sym.getSymbol('UIControlsPlayer').$('Textlegendas').css({'opacity':'0'});legendasOn=0;}};sym.OverLegendas=function(){if(legendasOn==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(250);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(750);}};sym.OutLegendas=function(){if(legendasOn==0){sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(0);}
else{sym.getSymbol('UIControlsPlayer').getSymbol('BT_LEGENDA').stop(500);}};sym.IOS=function(){sym.getSymbol("UIControlsPlayer").getSymbol("BT_AUDIO").deleteSymbol();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=12;sym.setVariable("numbernext","cap2");sym.setVariable("numberprev","cap1");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("Os antigos gregos eram politeístas, ou seja, cultuavam vários deuses. Os deuses gregos eram seres imortais, mas que em muitos aspectos se assemelhavam aos humanos. A maior parte das divindades gregas vivia no <font face='ArialBlack'>Monte Olimpo</font>.");sym.$("TextLocal").html("Representação dos deuses do Olimpo. Cores-fantasia.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=33;sym.setVariable("numberprev","cap1");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF").hide();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").hide();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF_NULL").css({"opacity":"1"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"1"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("Clique nos destaques para saber mais.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",35000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=41;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Zeus</font> é o deus mais importante do Monte Olimpo, rei dos deuses gregos. A águia dourada é o seu pássaro sagrado, simbolizando a força, a coragem e a justiça.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Zeus</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=58;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Hera</font> é a rainha dos deuses do Olimpo. Irmã e esposa de Zeus, costumava ser cultuada como deusa do matrimônio e do nascimento.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Hera</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",60000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=71;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Héstia</font> é uma das irmãs de Zeus. É a deusa do fogo doméstico e representa a harmonia familiar.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Héstia</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",77000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=92;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Ares</font> é filho de Zeus e Hera. Deus da guerra e dos combates, ele está sempre com escudo, peitoral e lança.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Ares</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",69000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=82;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Deméter</font> é a deusa da agricultura e dos cereais. É representada com uma coroa de espigas.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Deméter</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",87000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=104;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Atena</font> é a deusa da sabedoria e surgiu da cabeça de seu pai, Zeus, depois que ele engoliu a mãe dela, Métis, deusa da astúcia.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Atena</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",98000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=118;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Apolo</font> é o deus da música, da poesia, da medicina e da adivinhação. Depois de seu pai, Zeus, era o deus mais adorado na Grécia.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Apolo</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",111000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=132;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Ártemis</font> é irmã gêmea de Apolo. Ela é a deusa virgem dos nascimentos e da caça e protetora dos jovens. Seu símbolo é o arco e flecha.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Ártemis</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",123000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=145;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Afrodite</font>, deusa do amor e da beleza, é a mãe de Eros, também conhecido como Cupido, cujo principal atributo é fazer as pessoas se apaixonarem.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Afrodite</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",135000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.play();mediaElement.currentTime=159;sym.setVariable("numberprev","loop");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").show();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"0"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("<font face='ArialBlack'>Hermes</font> é o mensageiro dos deuses, protetor dos caminhos e dos viajantes. Ele também guia a alma dos mortos até o mundo de Hades.");sym.$("NOmeDeuses").html("<font face='ArialBlack' size='3'>Hermes</font>");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",34000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33000,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.pause();sym.setVariable("numberprev","cap1");sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF").hide();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY").hide();sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_FF_NULL").css({"opacity":"1"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("BT_PLAY_NULL").css({"opacity":"1"});sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("Textlegendas").html("Clique nos destaques para saber mais.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",48750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",59750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",68750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",76750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",86750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",97975,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",110500,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",122500,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",134750,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",145500,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bt_player}","click",function(sym,e){sym.stop(1250);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.getSymbol("loader").play();if((navigator.userAgent.match(/iPhone/i))){sym.IOS();}
if((navigator.userAgent.match(/iPad/i))){sym.IOS();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){var mediaElement=document.getElementById('Stage_audio');mediaElement.addEventListener("timeupdate",function(){if((mediaElement.currentTime>1.5)&&(mediaElement.currentTime<2)){sym.play();}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'sym_controls_info'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.$("base_ficha").show();sym.$("Textficha").html("<b>Diretoria de Tecnologia Educacional - Editora Moderna</b><br/><br/><b>Diretora responsável</b><br/>Kelly Mayumi Ishida<br/><br/><b>Roteiro</b><br/>Natália Peixoto Rodrigues<br/><br/><b>Revisão técnica</b><br/>Carlos Eduardo de Almeida Ogawa<br/>Leandro Salman Torelli<br/><br/><b>Tradução</b><br/>María Alicia Manzone Rossi<br/><br/><b>Locução</b><br/>Adriana Maria Pinto da Cruz<br/><br/><b>Programação</b><br/>Roberto Andrade Ono<br/><br/><b>Produção</b><br/>Talles Rodrigues Alves<br/><br/><i>Todos os direitos reservados.</i><br/><br/>EDITORA MODERNA LTDA.<br/>Rua Padre Adelino, 758 – Belenzinho<br/>São Paulo, SP – Brasil<br/>CEP 03303-904<br/><br/>2012<br/><i>Produzido no Brasil</i>");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Info_xair}","click",function(sym,e){sym.stop(0);sym.$("Infos_info_1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Info_xair}","mouseout",function(sym,e){sym.$("tooltip_fechar").html("");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Info_xair}","mouseover",function(sym,e){sym.$("tooltip_fechar").html("fechar");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Infos_info_1}","click",function(sym,e){sym.stop(500);sym.$("Infos_info_1").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Infos_info_1}","mouseout",function(sym,e){sym.$("tooltip_infos").html("");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Infos_info_1}","mouseover",function(sym,e){sym.$("tooltip_infos").html("informações");});
//Edge binding end
})("controls_info");
//Edge symbol end:'controls_info'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'Bt_detalhe'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play(0);});
//Edge binding end
})("Bt_detalhe");
//Edge symbol end:'Bt_detalhe'

//=========================================================

//Edge symbol: 'DetalhesOlimpo'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_zeus}","click",function(sym,e){sym.getComposition().getStage().play("zeus");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_hermes}","click",function(sym,e){sym.getComposition().getStage().play("hermes");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_demeter}","click",function(sym,e){sym.getComposition().getStage().play("demeter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_hestia}","click",function(sym,e){sym.getComposition().getStage().play("hestia");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_hera}","click",function(sym,e){sym.getComposition().getStage().play("hera");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_artemis}","click",function(sym,e){sym.getComposition().getStage().play("artemis");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_apolo}","click",function(sym,e){sym.getComposition().getStage().play("apolo");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_afrodite}","click",function(sym,e){sym.getComposition().getStage().play("afrodite");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_ares}","click",function(sym,e){sym.getComposition().getStage().play("ares");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Bt_atena}","click",function(sym,e){sym.getComposition().getStage().play("atena");});
//Edge binding end
})("DetalhesOlimpo");
//Edge symbol end:'DetalhesOlimpo'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'loader'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.getComposition().getStage().stop(50);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){var pos=sym.getPosition();var meuValueTime=1000;var meuValueTotal=4000;var meuValuePercente=0;while(pos<=meuValueTotal&&pos>=meuValueTime){meuValueTime=meuValueTime+30;meuValuePercente=meuValuePercente+1;sym.$("TextLoader").html(meuValuePercente+"%");};});
//Edge binding end
})("loader");
//Edge symbol end:'loader'

//=========================================================

//=========================================================

//=========================================================

//=========================================================

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'BT_AUDIO'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("desativa volume").css({"opacity":"1"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("ativa volume").css({"opacity":"1"});});
//Edge binding end
})("BT_AUDIO");
//Edge symbol end:'BT_AUDIO'

//=========================================================

//Edge symbol: 'BT_LEGENDA'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("ligar legenda").css({"opacity":"1"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("desligar legenda").css({"opacity":"1"});});
//Edge binding end
})("BT_LEGENDA");
//Edge symbol end:'BT_LEGENDA'

//=========================================================

//Edge symbol: 'BT_PLAY'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("pausar").css({"opacity":"1"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("tocar").css({"opacity":"1"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
})("BT_PLAY");
//Edge symbol end:'BT_PLAY'

//=========================================================

//Edge symbol: 'BT_FF'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("próxima cena").css({"opacity":"1"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
})("BT_FF");
//Edge symbol end:'BT_FF'

//=========================================================

//Edge symbol: 'BT_PLAY_1'
(function(symbolName){})("BT_PLAY_NULL");
//Edge symbol end:'BT_PLAY_NULL'

//=========================================================

//Edge symbol: 'UIControlsPlayer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_BT_PLAY}","click",function(sym,e){sym.getComposition().getStage().ControlePlay();sym.getComposition().getStage().OutPlay();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_PLAY}","mouseover",function(sym,e){sym.getComposition().getStage().OverPlay();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_PLAY}","mouseout",function(sym,e){sym.getComposition().getStage().OutPlay();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_FF}","click",function(sym,e){sym.getComposition().getStage().FrenteClipe();sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_FF").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_FF}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_FF").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_FF}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_FF").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_REW}","click",function(sym,e){sym.getComposition().getStage().VoltarClipe();sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_REW").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_REW}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_REW").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_REW}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_REW").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_AUDIO}","click",function(sym,e){sym.getComposition().getStage().AudioOf();sym.getComposition().getStage().AudioMute();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_AUDIO}","mouseover",function(sym,e){sym.getComposition().getStage().AudioOn();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_AUDIO}","mouseout",function(sym,e){sym.getComposition().getStage().AudioOf();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_LEGENDA}","click",function(sym,e){sym.getComposition().getStage().OutLegendas();sym.getComposition().getStage().Legendar();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_LEGENDA}","mouseover",function(sym,e){sym.getComposition().getStage().OverLegendas();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_LEGENDA}","mouseout",function(sym,e){sym.getComposition().getStage().OutLegendas();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_LEGENDA}","touchstart",function(sym,e){sym.getComposition().getStage().OverLegendas();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_LEGENDA}","touchend",function(sym,e){sym.getComposition().getStage().OutLegendas();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_AUDIO}","touchstart",function(sym,e){sym.getComposition().getStage().AudioOn();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_AUDIO}","touchend",function(sym,e){sym.getComposition().getStage().AudioOf();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_FF}","touchstart",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_FF").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_FF}","touchend",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_FF").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_REW}","touchstart",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_REW").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_REW}","touchend",function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").getSymbol("BT_REW").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_PLAY}","touchstart",function(sym,e){sym.getComposition().getStage().OverPlay();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BT_PLAY}","touchend",function(sym,e){sym.getComposition().getStage().OutPlay();});
//Edge binding end
})("UIControlsPlayer");
//Edge symbol end:'UIControlsPlayer'

//=========================================================

//Edge symbol: 'BT_FF_1'
(function(symbolName){})("BT_FF_NULL");
//Edge symbol end:'BT_FF_NULL'

//=========================================================

//Edge symbol: 'BT_FF_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").css({"opacity":"0"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10,function(sym,e){sym.getComposition().getStage().getSymbol("UIControlsPlayer").$("TextTooltip").html("cena anterior").css({"opacity":"1"});});
//Edge binding end
})("BT_REW");
//Edge symbol end:'BT_REW'
})(jQuery,AdobeEdge,"EDGE-5349547");