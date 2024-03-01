import { DevTools } from "@effect/experimental";
import { NodeRuntime } from "@effect/platform-node";
import { Effect, Metric } from "effect";

const metric = Metric.counter("my_counter").pipe(Metric.withConstantInput(1));

const main = metric(Effect.log("ok")).pipe(
	Effect.withSpan("ok"),
	Effect.delay(1000),
	Effect.forever,
);

main.pipe(Effect.provide(DevTools.layer()), NodeRuntime.runMain);
