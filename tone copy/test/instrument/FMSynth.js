import FMSynth from "Tone/instrument/FMSynth";
import Basic from "helper/Basic";
import InstrumentTest from "helper/InstrumentTests";
import CompareToFile from "helper/CompareToFile";
import Supports from "helper/Supports";

describe("FMSynth", function(){

	Basic(FMSynth);
	InstrumentTest(FMSynth, "C4");

	if (Supports.CHROME_AUDIO_RENDERING){
		it("matches a file", function(){
			return CompareToFile(function(){
				var synth = new FMSynth().toMaster();
				synth.triggerAttackRelease("G4", 0.1, 0.05);
			}, "fmSynth.wav", 0.1);
		});
	}

	context("API", function(){

		it("can get and set carrier attributes", function(){
			var fmSynth = new FMSynth();
			fmSynth.oscillator.type = "triangle";
			expect(fmSynth.oscillator.type).to.equal("triangle");
			fmSynth.dispose();
		});

		it("can get and set modulator attributes", function(){
			var fmSynth = new FMSynth();
			fmSynth.modulationEnvelope.attack = 0.24;
			expect(fmSynth.modulationEnvelope.attack).to.equal(0.24);
			fmSynth.dispose();
		});

		it("can get and set harmonicity", function(){
			var fmSynth = new FMSynth();
			fmSynth.harmonicity.value = 2;
			expect(fmSynth.harmonicity.value).to.equal(2);
			fmSynth.dispose();
		});

		it("can be constructed with an options object", function(){
			var fmSynth = new FMSynth({
				"envelope" : {
					"release" : 0.3
				}
			});
			expect(fmSynth.envelope.release).to.equal(0.3);
			fmSynth.dispose();
		});

		it("can get/set attributes", function(){
			var fmSynth = new FMSynth();
			fmSynth.set({
				"harmonicity" : 1.5,
				"detune" : 1200,
			});
			expect(fmSynth.get().harmonicity).to.equal(1.5);
			expect(fmSynth.get().detune).to.be.closeTo(1200, 1);
			fmSynth.dispose();
		});

	});
});

