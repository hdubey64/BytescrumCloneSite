"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function ShopifyDevAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Shopify-inspired Animation */}
      <div className="absolute inset-0">
        {/* Shopify Logo Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div
            className="w-[500px] h-[500px] rounded-full border-[30px] border-green-500/30"
            animate={{
              rotate: 360,
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              rotate: {
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Shopify/Liquid Code Snippets */}
        {Array.from({ length: 10 }).map((_, index) => {
          const size = Math.random() * 250 + 150
          const snippets = [
            `{% comment %}
  Product card template
{% endcomment %}
<div class="product-card">
  <a href="{{ product.url }}">
    <img src="{{ product.featured_image | img_url: '400x400' }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p class="price">{{ product.price | money }}</p>
    {% if product.available %}
      <span class="badge in-stock">In stock</span>
    {% else %}
      <span class="badge sold-out">Sold out</span>
    {% endif %}
  </a>
</div>`,
            `// Shopify theme.js
document.addEventListener('DOMContentLoaded', function() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        updateCart();
        showAddToCartMessage();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
});`,
            `{% schema %}
{
  "name": "Featured Products",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Section Title",
      "default": "Featured Products"
    },
    {
      "type": "collection",
      "id": "featured_collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "products_to_show",
      "min": 2,
      "max": 12,
      "step": 1,
      "label": "Products to show",
      "default": 4
    }
  ],
  "presets": [
    {
      "name": "Featured Products",
      "category": "Products"
    }
  ]
}
{% endschema %}`,
            `// Shopify App - React Component
import React, { useState, useEffect } from 'react';
import { Card, Button, ResourceList, Thumbnail, TextStyle } from '@shopify/polaris';

function ProductList() {
  const [products, setProducts] = useState([]);
  
  // Static product data - no database needed
  useEffect(() => {
    setProducts([
      { id: 1, title: 'Product 1', price: '$19.99', image: '/product1.jpg' },
      { id: 2, title: 'Product 2', price: '$29.99', image: '/product2.jpg' },
      { id: 3, title: 'Product 3', price: '$39.99', image: '/product3.jpg' }
    ]);
  }, []);

  return (
    <Card title="Products">
      <ResourceList
        items={products}
        renderItem={(product) => (
          <ResourceList.Item
            id={product.id}
            media={<Thumbnail source={product.image} alt={product.title} />}
            accessibilityLabel={\`View details for \${product.title}\`}
          >
            <h3><TextStyle variation="strong">{product.title}</TextStyle></h3>
            <div>{product.price}</div>
          </ResourceList.Item>
        )}
      />
    </Card>
  );
}`,
          ]
          const snippet = snippets[Math.floor(Math.random() * snippets.length)]

          return (
            <motion.div
              key={`snippet-${index}`}
              className="absolute rounded-md border border-green-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-green-300 font-mono overflow-hidden"
              style={{
                width: size,
                height: size * 0.8,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                rotateX: Math.random() * 20 - 10,
                rotateY: Math.random() * 20 - 10,
                rotateZ: Math.random() * 10 - 5,
              }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0, 0.7, 0],
                rotateX: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateY: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <pre>{snippet}</pre>
            </motion.div>
          )
        })}

        {/* Shopify/Liquid Tags */}
        {Array.from({ length: 15 }).map((_, index) => {
          const tags = [
            "{{ product.title }}",
            "{{ product.price | money }}",
            "{% if %}",
            "{% endif %}",
            "{% for %}",
            "{% endfor %}",
            "{{ shop.name }}",
            "{{ cart.total_price | money }}",
            "{% section %}",
            "{% schema %}",
            "{{ settings.color_main }}",
          ]
          const tag = tags[Math.floor(Math.random() * tags.length)]

          return (
            <motion.div
              key={`tag-${index}`}
              className="absolute font-mono text-green-400/60 bg-black/30 px-2 py-1 rounded-md"
              style={{
                fontSize: Math.random() * 14 + 12,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth + (Math.random() * 200 - 100)],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight + (Math.random() * 200 - 100),
                ],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {tag}
            </motion.div>
          )
        })}

        {/* E-commerce Elements */}
        {Array.from({ length: 8 }).map((_, index) => {
          const elements = ["🛒", "💳", "📦", "🏷️", "🔍", "👕", "👟", "📱", "💻", "🎮", "🎧", "📚", "🛋️", "🧴"]
          const element = elements[Math.floor(Math.random() * elements.length)]

          return (
            <motion.div
              key={`element-${index}`}
              className="absolute text-2xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth + (Math.random() * 300 - 150)],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight + (Math.random() * 300 - 150),
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {element}
            </motion.div>
          )
        })}

        {/* Flowing Data Streams */}
        {Array.from({ length: 8 }).map((_, index) => {
          const isHorizontal = Math.random() > 0.5
          const startX = isHorizontal ? 0 : Math.random() * window.innerWidth
          const startY = isHorizontal ? Math.random() * window.innerHeight : 0
          const endX = isHorizontal ? window.innerWidth : startX
          const endY = isHorizontal ? startY : window.innerHeight

          return (
            <motion.div
              key={`stream-${index}`}
              className="absolute bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0"
              style={{
                width: isHorizontal ? "100%" : "2px",
                height: isHorizontal ? "2px" : "100%",
                left: startX,
                top: startY,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                x: isHorizontal ? ["-100%", "100%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "100%"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

