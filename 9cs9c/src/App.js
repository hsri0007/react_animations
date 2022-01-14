import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div
      className="App"
      style={{
        background: "black"
      }}
    >
      <AnimatePresence>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setState([...state, input])}>add</button>
        {state.map((arg, i) => (
          <motion.h1
            key={i}
            onClick={() =>
              setState((prev) => prev.filter((ite) => ite !== arg))
            }
            style={{ color: "white" }}
            whileHover={{ scale: 1.2 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
              x: 0,
              rotate: 0,
              y: 0
            }}
            initial={{ opacity: 0, x: 50, rotate: 90, y: 100 }}
            exit={{
              opacity: 0,
              x: 50,
              rotate: 90,
              y: 100,
              transition: { duration: 1 }
            }}
          >
            {arg}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
