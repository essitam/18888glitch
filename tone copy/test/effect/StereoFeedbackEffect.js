import Effect from "Tone/effect/Effect";
import StereoFeedbackEffect from "Tone/effect/StereoFeedbackEffect";
import Basic from "helper/Basic";

describe("StereoFeedbackEffect", function(){

	Basic(StereoFeedbackEffect);

	context("Feedback Effect", function(){

		it("extends Effect", function(){
			var stereoFeedback = new StereoFeedbackEffect();
			expect(stereoFeedback).to.be.instanceOf(Effect);
			stereoFeedback.dispose();
		});

		it("has a feedback signal", function(){
			var stereoFeedback = new StereoFeedbackEffect();
			expect(stereoFeedback).to.have.property("feedback");
			expect(stereoFeedback.feedback).to.have.property("value");
			stereoFeedback.dispose();
		});

		it("has a mid and a side send and return", function(){
			var stereoFeedback = new StereoFeedbackEffect();
			expect(stereoFeedback).to.have.property("effectSendL");
			expect(stereoFeedback).to.have.property("effectSendR");
			expect(stereoFeedback).to.have.property("effectReturnL");
			expect(stereoFeedback).to.have.property("effectReturnR");
			stereoFeedback.dispose();
		});
	});
});

