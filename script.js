const calcular = () => {	
	let u = Number($('#u').val());
	let registor1 = Number($('#registor1').val());
	let registor2 = Number($('#registor2').val());
	let registor3 = Number($('#registor3').val());
	let registor4 = Number($('#registor4').val());
	let registor5 = Number($('#registor5').val());
	let registor6 = Number($('#registor6').val());

	let resistenciaEquivalente = registor1 + registor2 + registor3 + registor4 + registor5 + registor6;
	let intensidade = Number((u / resistenciaEquivalente).toFixed(1));

	let ddp1 = registor1 * intensidade;
	let ddp2 = registor2 * intensidade;
	let ddp3 = registor3 * intensidade;
	let ddp4 = registor4 * intensidade;
	let ddp5 = registor5 * intensidade;
	let ddp6 = registor6 * intensidade;
	let ddpGeral = ddp1 + ddp2 + ddp3 + ddp4 + ddp5 + ddp6;

	let potenciaDissipadaR2 = registor2 * (intensidade ** 2);
	let potenciaDissipadaR6 = registor6 * (intensidade ** 2);

	let textoResultado = `Resistência equivalente: ${resistenciaEquivalente}Ω <br> Potência dissipada em R2: ${potenciaDissipadaR2}w <br> Potência dissipada em R6: ${potenciaDissipadaR6}w <br> DDP do registor 1: ${ddp1}V <br> DDP do registor 2: ${ddp2}V <br> DDP do registor 3: ${ddp3}V <br> DDP do registor 4: ${ddp4}V <br> DDP do registor 5: ${ddp5}V <br> DDP do registor 6: ${ddp6}V <br> DDP geral: ${ddpGeral}V`;

	$('#resultado').html(textoResultado);

};